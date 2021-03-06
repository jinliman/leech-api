const BigNumber = require('bignumber.js');
const { bscWeb3: web3 } = require('../../../../utils/web3');

const ERC20 = require('../../../../abis/ERC20.json');
const AlpacaIbVault = require('../../../../abis/AlpacaIbVault.json');
const AlpacaIbVaultConfig = require('../../../../abis/AlpacaIbVaultConfig.json');

const { getCakeV2PoolApy } = require('../pancake/getCakeV2PoolApy');
const { fetchPrice } = require('../../../../utils/fetchPrice');
const { getApyBreakdown } = require('../../common/getApyBreakdown');

const { getTotalStakedInUsd } = require('../../../../utils/getTotalStakedInUsd');
const { getYearlyRewardsInUsd } = require('./getYearlyRewardsInUsd');
const pools = require('../../../../data/alpacaPools.json');

const getAlpacaApys = async () => {
  const getPools = [];
  pools.forEach(pool => getPools.push(getPoolApy(pool)));

  const getLending = [];
  pools.forEach(pool => getLending.push(getLendingApr(pool)));

  const [poolAprs, lendingAprs] = await Promise.all([
    Promise.all(getPools),
    Promise.all(getLending),
  ]);

  const tradingAprs = {};
  pools.forEach((pool, i) => {
    tradingAprs[pool.address.toLowerCase()] = lendingAprs[i];
  });

  return getApyBreakdown(pools, tradingAprs, poolAprs, 0);
};

const getPoolApy = async pool => {
  const fairLaunch = '0xA625AB01B08ce023B2a342Dbb12a16f2C8489A8F';

  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(fairLaunch, pool),
    getTotalStakedInUsd(fairLaunch, pool.address, pool.oracle, pool.oracleId),
  ]);

  const simpleApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  
  return simpleApy;
};

const getLendingApr = async pool => {
  const ibToken = new web3.eth.Contract(AlpacaIbVault, pool.address);
  let [totalToken, vaultDebtVal, reservePool, configAddress] = await Promise.all([
    ibToken.methods.totalToken().call(),
    ibToken.methods.vaultDebtVal().call(),
    ibToken.methods.reservePool().call(),
    ibToken.methods.config().call(),
  ]);
  totalToken = new BigNumber(totalToken);
  vaultDebtVal = new BigNumber(vaultDebtVal);

  const utilization = vaultDebtVal.div(totalToken);
  const floating = totalToken.minus(vaultDebtVal).plus(new BigNumber(reservePool));

  const config = new web3.eth.Contract(AlpacaIbVaultConfig, configAddress);
  const rate = new BigNumber(await config.methods.getInterestRate(vaultDebtVal, floating).call());
  const lendingApr = rate.times(31536000).times(0.81).times(utilization).div('1e18');
  
  let protocolApr = new BigNumber(0);
  if (pool.workers) {
    const cakeApy = (await getCakeV2PoolApy())['cake-cakev2'];
    const cakeApr = calcApr(cakeApy) / 0.99;

    const syrup = '0x009cf7bc57584b7998236eff51b98a168dcea9b0';
    const tokenContract = new web3.eth.Contract(ERC20, syrup);
    let promises = [];
    pool.workers.forEach(worker => promises.push(tokenContract.methods.balanceOf(worker).call()));
    const values = await Promise.all(promises);

    let totalCakes = new BigNumber(0);
    for (const v of values) {
      totalCakes = totalCakes.plus(new BigNumber(v));
    }
    const cakePrice = await fetchPrice({ oracle: 'tokens', id: 'Cake' });
    const cakeRewardInUsd = totalCakes
      .times(cakePrice)
      .times(cakeApr)
      .times(0.19)
      .times(10)
      .div(19)
      .div('1e18');

    const tokenPrice = await fetchPrice({ oracle: 'tokens', id: 'ALPACA' });
    const totalSupplyInUsd = totalToken.times(tokenPrice).div('1e18');

    protocolApr = cakeRewardInUsd.div(totalSupplyInUsd);
  }

  return lendingApr.plus(protocolApr);
};

const calcApr = apy => {
  return (Math.pow(10, Math.log10(apy + 1) / 365) - 1) * 365;
};

module.exports = {
  calcApr,
  getAlpacaApys,
};
