const { getUtcSecondsFromDayRange } = require('./getUtcSecondsFromDayRange');
const {
  pairDayDataQuery,
  pairDayDataSushiQuery,
  poolsDataQuery,
  dayDataQuery,
  joeDayDataQuery,
  balancerDataQuery,
} = require('../apollo/queries');

const { getBlockTime } = require('./getBlockTime');
const { getBlockNumber } = require('./getBlockNumber');

const BigNumber = require('bignumber.js');

const getTradingFeeApr = async (
  client,
  pairAddresses,
  liquidityProviderFee
) => {
  const [start, end] = getUtcSecondsFromDayRange(1, 2);
  const pairAddressToAprMap = {};

  try {
    let {
      data: { pairDayDatas },
    } = await client.query({
      query: pairDayDataQuery(addressesToLowercase(pairAddresses), start, end),
    });

    for (const pairDayData of pairDayDatas) {
      const pairAddress = pairDayData.id.split('-')[0].toLowerCase();
      pairAddressToAprMap[pairAddress] = new BigNumber(pairDayData.dailyVolumeUSD)
        .times(liquidityProviderFee)
        .times(365)
        .dividedBy(pairDayData.reserveUSD);
    }
  } catch (e) {}

  return pairAddressToAprMap;
};

const getTradingFeeAprSushi = async (
  client,
  pairAddresses,
  liquidityProviderFee
) => {
  const [start0, end0] = getUtcSecondsFromDayRange(1, 2);
  const [start1, end1] = getUtcSecondsFromDayRange(3, 4);
  const pairAddressToAprMap = {};

  try {
    let queryResponse0 = await client.query({
      query: pairDayDataSushiQuery(addressesToLowercase(pairAddresses), start0, end0),
    });

    let queryResponse1 = await client.query({
      query: pairDayDataSushiQuery(addressesToLowercase(pairAddresses), start1, end1),
    });

    const pairDayDatas0 = queryResponse0.data.pairs.map(pair => pair.dayData[0]);
    const pairDayDatas1 = queryResponse1.data.pairs.map(pair => pair.dayData[0]);

    for (const pairDayData of zip([pairDayDatas0, pairDayDatas1])) {
      if (pairDayData && pairDayData[0] && pairDayData[1]) {
        const pairAddress = pairDayData[0].id.split('-')[0].toLowerCase();
        const avgVol = new BigNumber(pairDayData[0].volumeUSD)
          .plus(pairDayData[1].volumeUSD)
          .dividedBy(2);
        const avgReserve = new BigNumber(pairDayData[0].reserveUSD)
          .plus(pairDayData[1].reserveUSD)
          .dividedBy(2);
        pairAddressToAprMap[pairAddress] = new BigNumber(avgVol)
          .times(liquidityProviderFee)
          .times(365)
          .dividedBy(avgReserve);
      }
    }
  } catch (e) {}

  return pairAddressToAprMap;
};

const getTradingFeeAprBalancer = async (
  client,
  pairAddresses,
  liquidityProviderFee
) => {
  const blockTime = await getBlockTime(250);
  const currentBlock = await getBlockNumber(250);
  const pastBlock = Math.floor(currentBlock - 86400 / blockTime);
  const pairAddressesToAprMap = {};

  try {
    const queryCurrent = await client.query({
      query: poolsDataQuery(addressesToLowercase(pairAddresses), currentBlock),
    });

    const queryPast = await client.query({
      query: poolsDataQuery(addressesToLowercase(pairAddresses), pastBlock),
    });

    const poolDayDatas0 = queryCurrent.data.pools;
    const poolDayDatas1 = queryPast.data.pools;

    for (const pool of poolDayDatas0) {
      const pair = pool.address.toLowerCase();
      const pastPool = poolDayDatas1.filter(p => {
        return p.address === pool.address;
      })[0];
      pairAddressesToAprMap[pair] = new BigNumber(pool.totalSwapFee)
        .minus(pastPool.totalSwapFee)
        .times(365)
        .dividedBy(pool.totalLiquidity);
    }
  } catch (e) {}

  return pairAddressesToAprMap;
};

const getVariableTradingFeeApr = async (
  client,
  pairAddresses,
  liquidityProviderFee
) => {
  const [start, end] = getUtcSecondsFromDayRange(1, 2);
  const pairAddressToAprMap = {};

  try {
    let {
      data: { pairDayDatas },
    } = await client.query({
      query: pairDayDataQuery(addressesToLowercase(pairAddresses), start, end),
    });
    let i = 0;
    for (const pairDayData of pairDayDatas) {
      const pairAddress = pairDayData.id.split('-')[0].toLowerCase();
      pairAddressToAprMap[pairAddress] = new BigNumber(pairDayData.dailyVolumeUSD)
        .times(liquidityProviderFee[i])
        .times(365)
        .dividedBy(pairDayData.reserveUSD);
      i++;
    }
  } catch (e) {}

  return pairAddressToAprMap;
};

const addressesToLowercase = (pairAddresses) =>
  pairAddresses.map(address => address.toLowerCase());

const zip = arrays => {
  return arrays[0].map((_, i) => {
    return arrays.map(array => {
      return array[i];
    });
  });
};

const getYearlyPlatformTradingFees = async (
  client,
  liquidityProviderFee
) => {
  let yearlyTradingFeesUsd = new BigNumber(0);
  const timestamp = Date.now();

  try {
    let data = await client.query({ query: dayDataQuery(timestamp) });
    const dailyVolumeUSD = new BigNumber(data.data.uniswapDayData.dailyVolumeUSD);
    yearlyTradingFeesUsd = dailyVolumeUSD.times(liquidityProviderFee).times(365);
  } catch (e) {}

  return yearlyTradingFeesUsd;
};

const getYearlyJoePlatformTradingFees = async (
  client,
  liquidityProviderFee
) => {
  let yearlyTradingFeesUsd = new BigNumber(0);
  const timestamp = Date.now();

  try {
    let data = await client.query({ query: joeDayDataQuery(timestamp) });
    const dailyVolumeUSD = new BigNumber(data.data.dayData.volumeUSD);
    yearlyTradingFeesUsd = dailyVolumeUSD.times(liquidityProviderFee).times(365);
  } catch (e) {}

  return yearlyTradingFeesUsd;
};

const getYearlyBalancerPlatformTradingFees = async (
  client,
  liquidityProviderFeeShare
) => {
  const blockTime = await getBlockTime(250);
  const currentBlock = await getBlockNumber(250);
  const pastBlock = Math.floor(currentBlock - 86400 / blockTime);

  let yearlyTradingFeesUsd = new BigNumber(0);

  try {
    const currentData = await client.query({ query: balancerDataQuery(currentBlock) });
    const pastData = await client.query({ query: balancerDataQuery(pastBlock) });
    const currentSwapFee = new BigNumber(currentData.data.balancers[0].totalSwapFee);
    const pastSwapFee = new BigNumber(pastData.data.balancers[0].totalSwapFee);

    const dailySwapFeeUsd = currentSwapFee.minus(pastSwapFee);
    yearlyTradingFeesUsd = dailySwapFeeUsd.times(365).times(liquidityProviderFeeShare);
  } catch (e) {}

  return yearlyTradingFeesUsd;
};

module.exports = {
  getTradingFeeApr,
  getTradingFeeAprSushi,
  getTradingFeeAprBalancer,
  getVariableTradingFeeApr,
  getYearlyPlatformTradingFees,
  getYearlyJoePlatformTradingFees,
  getYearlyBalancerPlatformTradingFees,
};
