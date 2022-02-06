const getComethLpApys = require('./getComethLpApys');
const { getQuickLpApys } = require('./getQuickLpApys');
const { getAaveApys } = require('./getAaveApys');
const { getSushiLpApys } = require('./getSushiLpApys');
const { getSushiOhmLpApys } = require('./getSushiOhmLpApys');
const getComethMultiApys = require('./getComethMultiLpApys');
const getPolyzapApys = require('./getPolyzapApys');
const getCurveApys = require('./getCurveApys');
const getJetswapApys = require('./getJetswapApys');
const getIronSwapApys = require('./getIronSwapApys');
const getDinoswapApys = require('./getDinoswapApys');
const { getApeLpApys } = require('./getApeLpApys');
const { getFarmheroApys } = require('./getFarmheroApys');
const getMaiApys = require('./getMaiApys');
const { getTelxchangeApys } = require('./getTelxchangeApys');
const { getPolygonFarmApys } = require('./getPolygonFarmApys');
const getQuickSingleApys = require('./getQuickSingleApys');
const { getTetuApys } = require('./getTetuApys');
const { getSingularApys } = require('./getSingularApys');
const getCafeLpApys = require('./getCafeLpApys');
const getKyberLpApys = require('./getKyberLpApys');
const { getQuickDualLpApys } = require('./getQuickDualLpApys');
const { getJarvisApys } = require('./getJarvisApys');

const getApys = [
  getComethLpApys,
  getQuickLpApys,
  getQuickSingleApys,
  getQuickDualLpApys,
  getAaveApys,
  getSushiLpApys,
  getSushiOhmLpApys,
  getComethMultiApys,
  getPolyzapApys,
  getCurveApys,
  getApeLpApys,
  getMaiApys,
  getJetswapApys,
  getIronSwapApys,
  getTelxchangeApys,
  getFarmheroApys,
  getDinoswapApys,
  getPolygonFarmApys,
  getTetuApys,
  getSingularApys,
  getCafeLpApys,
  getKyberLpApys,
  getJarvisApys,
];

const BATCH_SIZE = 15;

const getMaticApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  let results = [];
  for (let i = 0; i < getApys.length; i += BATCH_SIZE) {
    const batchApys = getApys.slice(i, i + BATCH_SIZE);
    const promises = [];
    batchApys.forEach(getApy => promises.push(getApy()));
    const batchResults = await Promise.allSettled(promises);
    results = [...results, ...batchResults];
  }

  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getMaticApys error', result.reason);
      continue;
    }

    // Set default APY values
    let mappedApyValues = result.value;
    let mappedApyBreakdownValues = {};

    // Loop through key values and move default breakdown format
    // To require totalApy key
    for (const [key, value] of Object.entries(result.value)) {
      mappedApyBreakdownValues[key] = {
        totalApy: value,
      };
    }

    // Break out to apy and breakdowns if possible
    let hasApyBreakdowns = 'apyBreakdowns' in result.value;
    if (hasApyBreakdowns) {
      mappedApyValues = result.value.apys;
      mappedApyBreakdownValues = result.value.apyBreakdowns;
    }

    apys = { ...apys, ...mappedApyValues };

    apyBreakdowns = { ...apyBreakdowns, ...mappedApyBreakdownValues };
  }

  return {
    apys,
    apyBreakdowns,
  };
};

module.exports = { getMaticApys };
