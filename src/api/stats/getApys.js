const { getAvaxApys } = require('./avax');
const { getMaticApys } = require('./matic');
const { getHecoApys } = require('./heco');
const { getFantomApys } = require('./fantom');
const { getBSCApys } = require('./bsc');
const { getOneApys } = require('./one');
const { getArbitrumApys } = require('./arbitrum');
const { getCeloApys } = require('./celo');
const { getMoonriverApys } = require('./moonriver');
const { getCronosApys } = require('./cronos');
const { getAuroraApys } = require('./aurora');
const { getFuseApys } = require('./fuse');
const { getMetisApys } = require('./metis');

const INIT_DELAY = process.env.INIT_DELAY || 60 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let apys = {};
let apyBreakdowns = {};

const getApys = () => {
  return {
    apys,
    apyBreakdowns,
  };
};

const updateApys = async () => {
  try {
    const results = await Promise.allSettled([
      getMaticApys(),
      getAvaxApys(),
      getFantomApys(),
      getHecoApys(),
      getBSCApys(),
      getOneApys(),
      getArbitrumApys(),
      getCeloApys(),
      getMoonriverApys(),
      getCronosApys(),
      getAuroraApys(),
      getFuseApys(),
      getMetisApys(),
    ]);

    for (const result of results) {
      if (result.status !== 'fulfilled') {
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
  } catch (err) {}

  setTimeout(updateApys, REFRESH_INTERVAL);
};

setTimeout(updateApys, INIT_DELAY);

module.exports = { getApys };
