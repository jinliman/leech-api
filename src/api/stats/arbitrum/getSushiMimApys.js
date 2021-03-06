const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { arbitrumWeb3: web3, multicallAddress } = require('../../../utils/web3');

const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const SushiComplexRewarderTime = require('../../../abis/matic/SushiComplexRewarderTime.json');
const ERC20 = require('../../../abis/ERC20.json');
const { fetchPrice } = require('../../../utils/fetchPrice');
const pools = require('../../../data/arbitrum/sushiLpMimPools.json');
const { ARBITRUM_CHAIN_ID, SUSHI_LPF } = require('../../../constants');
const { getTradingFeeAprSushi: getTradingFeeApr } = require('../../../utils/getTradingFeeApr');
const { sushiArbitrumClient } = require('../../../apollo/client');
const { getApyBreakdown } = require('../common/getApyBreakdown');

const minichef = '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3';
const oracleId = 'SUSHI';
const oracle = 'tokens';
const DECIMALS = '1e18';
const secondsPerBlock = 1;
const secondsPerYear = 31536000;

const getSushiMimApys = async () => {
  const pairAddresses = pools.map(pool => pool.address);
  const tradingAprs = await getTradingFeeApr(sushiArbitrumClient, pairAddresses, SUSHI_LPF);
  const farmApys = await getFarmApys(pools);

  return getApyBreakdown(pools, tradingAprs, farmApys, SUSHI_LPF);
};

const getFarmApys = async pools => {
  const apys = [];
  const minichefContract = new web3.eth.Contract(SushiMiniChefV2, minichef);
  const sushiPerSecond = new BigNumber(await minichefContract.methods.sushiPerSecond().call());
  const totalAllocPoint = new BigNumber(await minichefContract.methods.totalAllocPoint().call());

  const tokenPrice = await fetchPrice({ oracle, id: oracleId });
  const { balances, allocPoints } = await getPoolsData(pools);
  for (let i = 0; i < pools.length; i++) {
    const pool = pools[i];
    const spellPrice = await fetchPrice({ oracle, id: pool.secondOracleId });

    const rewardContract = new web3.eth.Contract(SushiComplexRewarderTime, pool.rewarder);
    const rewardPerSecond = new BigNumber(await rewardContract.methods.rewardPerSecond().call());

    const lpPrice = await fetchPrice({ oracle: 'lps', id: pool.name });
    const totalStakedInUsd = balances[i].times(lpPrice).dividedBy('1e18');

    const poolBlockRewards = sushiPerSecond.times(allocPoints[i]).dividedBy(totalAllocPoint);
    const yearlyRewards = poolBlockRewards.dividedBy(secondsPerBlock).times(secondsPerYear);
    const yearlyRewardsInUsd = yearlyRewards.times(tokenPrice).dividedBy(DECIMALS);
    const yearlySpellRewards = rewardPerSecond.dividedBy(secondsPerBlock).times(secondsPerYear);
    const spellRewardsInUsd = yearlySpellRewards.times(spellPrice).dividedBy(DECIMALS);

    const apy = yearlyRewardsInUsd.plus(spellRewardsInUsd).dividedBy(totalStakedInUsd);

    apys.push(apy);
  }
  return apys;
};

const getPoolsData = async pools => {
  const minichefContract = new web3.eth.Contract(SushiMiniChefV2, minichef);

  const balanceCalls = [];
  const allocPointCalls = [];
  pools.forEach(pool => {
    const tokenContract = new web3.eth.Contract(ERC20, pool.address);
    balanceCalls.push({
      balance: tokenContract.methods.balanceOf(minichef),
    });
    allocPointCalls.push({
      allocPoint: minichefContract.methods.poolInfo(pool.poolId),
    });
  });

  const multicall = new MultiCall(web3, multicallAddress(ARBITRUM_CHAIN_ID));
  const res = await multicall.all([balanceCalls, allocPointCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const allocPoints = res[1].map(v => v.allocPoint['2']);
  return { balances, allocPoints };
};

module.exports = { getSushiMimApys, SUSHI_LPF };
