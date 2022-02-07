const { oneWeb3: web3 } = require('../../../utils/web3');

const {
  getCurveBaseApys,
  getTotalStakedInUsd,
  getYearlyRewardsInUsd,
} = require('../common/curve/getCurveApyData');
const { getApyBreakdown } = require('../common/getApyBreakdown');

const pools = require('../../../data/one/curvePools.json');
const baseApyUrl = 'https://stats.curve.fi/raw-stats-harmony/apys.json';
const tradingFees = 0.0002;

const getCurveApys = async () => {
  const baseApys = await getCurveBaseApys(pools, baseApyUrl);
  const farmApys = await getPoolApys(pools);
  const poolsMap = pools.map(p => ({ name: p.name, address: p.name }));
  return getApyBreakdown(poolsMap, baseApys, farmApys, tradingFees);
};

const getPoolApys = async pools => {
  const apys = [];

  let promises = [];
  pools.forEach(pool => promises.push(getPoolApy(pool)));
  const values = await Promise.all(promises);
  values.forEach(item => apys.push(item));

  return apys;
};

const getPoolApy = async pool => {
  const [yearlyRewardsInUsd, totalStakedInUsd] = await Promise.all([
    getYearlyRewardsInUsd(web3, pool),
    getTotalStakedInUsd(web3, pool),
  ]);
  const simpleApy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
  return simpleApy;
};

module.exports = { getCurveApys };
