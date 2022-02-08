const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { polygonWeb3: web3, multicallAddress } = require('../../../utils/web3');

// abis
const { FarmHeroChef_ABI } = require('../../../abis/matic/FarmHero/FarmHeroChef');
const {
  IFarmHeroStrategy_ABI,
} = require('../../../abis/matic/FarmHero/IFarmHeroStrategy');
// json data
const _pools = require('../../../data/matic/farmheroPools.json');
const pools = _pools;

const { fetchPrice } = require('../../../utils/fetchPrice');
const { POLYGON_CHAIN_ID, QUICK_LPF } = require('../../../constants');
const { getTradingFeeApr } = require('../../../utils/getTradingFeeApr');
const { quickClient } = require('../../../apollo/client');
const { getApyBreakdown } = require('../common/getApyBreakdown');
const { addressBook } = require('../../../../packages/address-book/address-book');
const { getEDecimals } = require('../../../utils/getEDecimals');

const {
  platforms: { farmhero },
  tokens: { HONOR },
} = addressBook.polygon;

const chef = farmhero.chef;
const oracleId = HONOR.symbol;
const oracle = 'tokens';
const DECIMALS = getEDecimals(HONOR.decimals);
const secondsPerBlock = 1;
const secondsPerYear = 31536000;

const getFarmheroApys = async () => {
  const pairAddresses = pools
    .filter(pool => pool.platform === 'quickswap') // no trading APR reported for waultswap ATM
    .map(pool => pool.address);
  const tradingAprs = await getTradingFeeApr(quickClient, pairAddresses, QUICK_LPF);
  const farmApys = await getFarmApys(pools);

  return getApyBreakdown(pools, tradingAprs, farmApys, QUICK_LPF);
};

const getFarmApys = async (pools) => {
  const apys = [];
  const chefContract = new web3.eth.Contract(FarmHeroChef_ABI, chef);
  const totalEpoch = await chefContract.methods.totalEpoch().call();
  const epochsLeft = await chefContract.methods.epochsLeft().call();
  const currentEpoch = (parseInt(totalEpoch) - parseInt(epochsLeft)).toString();
  const rewardPerSecond = new BigNumber(
    await chefContract.methods.epochReward(currentEpoch).call()
  );
  const erc20PoolRate = new BigNumber(await chefContract.methods.erc20PoolRate().call());
  const totalAllocPoint = new BigNumber(await chefContract.methods.totalAllocPoint(0).call()); //  enum PoolType { ERC20, ERC721, ERC1155 } // thus ERC20 = 0

  const tokenPrice = await fetchPrice({ oracle, id: oracleId });
  const { balances, allocPoints } = await getPoolsData(pools);
  for (let i = 0; i < pools.length; i++) {
    const pool = pools[i];

    const lpPrice = await fetchPrice({ oracle: 'lps', id: pool.name });
    const totalStakedInUsd = balances[i].times(lpPrice).dividedBy(pool.decimals);
    const erc20PoolRewardPerSecond = rewardPerSecond.times(erc20PoolRate).dividedBy(1000);
    const poolBlockRewards = erc20PoolRewardPerSecond
      .times(allocPoints[i])
      .dividedBy(totalAllocPoint);
    const yearlyRewards = poolBlockRewards.dividedBy(secondsPerBlock).times(secondsPerYear);
    const yearlyRewardsInUsd = yearlyRewards.times(tokenPrice).dividedBy(DECIMALS);
    const yearlyRewardsInUsdAfterPenalty = yearlyRewardsInUsd.div(2); // early withdraw penalty from vesting contract

    const apy = yearlyRewardsInUsdAfterPenalty.dividedBy(totalStakedInUsd);
    apys.push(apy);
  }
  return apys;
};

const getPoolsData = async (
  pools
) => {
  const chefContract = new web3.eth.Contract(FarmHeroChef_ABI, chef);
  const multicall = new MultiCall(web3, multicallAddress(POLYGON_CHAIN_ID));
  const balanceCalls = [];
  const allocPointCalls = [];
  pools.forEach(pool => {
    const stratContract = new web3.eth.Contract(
      IFarmHeroStrategy_ABI,
      pool.strat
    );
    balanceCalls.push({
      balance: stratContract.methods.wantLockedTotal(),
    });
    allocPointCalls.push({
      allocPoint: chefContract.methods.poolInfo(pool.poolId.toString()),
    });
  });

  const res = await multicall.all([balanceCalls, allocPointCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const allocPoints = res[1].map(v => v.allocPoint['2']);
  return { balances, allocPoints };
};

module.exports = {
  getFarmheroApys,
};
