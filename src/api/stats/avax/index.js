const { getLydLpApys } = require('./getLydLpApys');
const { getOliveApys } = require('./getOliveApys');
const { getJoeApys } = require('./getJoeLpApys');
const { getJoeDualApys } = require('./getJoeDualLpApys');
const { getJoeApy } = require('./getJoeApy');
const { getPangolinPNGApy } = require('./getPangolinPNGApy');
const { getCurveApys } = require('./getCurveApys');
const { getAaveApys } = require('./getAaveApys');
const { getSingularApys } = require('./getSingularApys');
const { getBlizzLpApys } = require('./getBlizzLpApys');
const { getBlizzLendingApys } = require('./getBlizzLendingApys');
const { getBankerJoeApys } = require('./getBankerJoeApys');
const { getSynapseApys } = require('./getSynapseApys');
const { getSpellApys } = require('./getSpellApys');
const { getMaiApys } = require('./getMaiApys');
const { getMaiCurveApys } = require('./getMaiCurveApys');
const { getPangolinV2Apys } = require('./getPangolinV2Apys');

const getApys = [
  getPangolinV2Apys,
  getLydLpApys,
  getPangolinPNGApy,
  getOliveApys,
  getJoeApys,
  getJoeDualApys,
  getJoeApy,
  getCurveApys,
  getAaveApys,
  getSingularApys,
  getBlizzLpApys,
  getBlizzLendingApys,
  getBankerJoeApys,
  getSynapseApys,
  getSpellApys,
  getMaiApys,
  getMaiCurveApys,
];

const getAvaxApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  let promises = [];
  getApys.forEach(getApy => promises.push(getApy()));
  const results = await Promise.allSettled(promises);

  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getAvaxApys error', result.reason);
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

module.exports = { getAvaxApys };
