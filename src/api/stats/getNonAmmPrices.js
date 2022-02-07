const { getBeltPrices } = require('./bsc/belt/getBeltPrices');
const { getEllipsisPrices } = require('./bsc/ellipsis/getEllipsisPrices');
const { getSnob3PoolPrice } = require('./avax/getSnob3PoolPrice');
const { getFroyoPrices } = require('./fantom/getFroyoPrices');
const { getGondolaPrices } = require('./avax/getGondolaPrices');
const { getCurvePolygonPrices } = require('./matic/getCurvePrices');
const { getCurveFantomPrices } = require('./fantom/getCurvePrices');
const { getDopplePrices } = require('./bsc/dopple/getDopplePrices');
const { getIronSwapPrices } = require('./matic/getIronSwapPrices');
const { getAlpacaIbPrices } = require('./bsc/alpaca/getAlpacaIbPrices');
const { getCurveArbitrumPrices } = require('./arbitrum/getCurvePrices');
const { getCurveAvaxPrices } = require('./avax/getCurvePrices');
const { getCurveHarmonyPrices } = require('./one/getCurvePrices');
const { getBeethovenxPrices } = require('./fantom/getBeethovenxPrices');
const { getSynapsePrices } = require('./avax/getSynapsePrices');
const { getJarvisPrices } = require('./matic/getJarvisPrices');

const getNonAmmPrices = async tokenPrices => {
  let prices = {};

  const promises = [
    getBeethovenxPrices(tokenPrices),
    getBeltPrices(tokenPrices),
    getEllipsisPrices(),
    getSnob3PoolPrice(),
    getFroyoPrices(),
    getGondolaPrices(tokenPrices),
    getCurvePolygonPrices(tokenPrices),
    getCurveFantomPrices(tokenPrices),
    getCurveArbitrumPrices(tokenPrices),
    getCurveAvaxPrices(tokenPrices),
    getCurveHarmonyPrices(tokenPrices),
    getDopplePrices(),
    getIronSwapPrices(),
    getAlpacaIbPrices(tokenPrices),
    getSynapsePrices(),
    getJarvisPrices(tokenPrices),
  ];

  // Setup error logs
  promises.forEach(p => p.catch(e => console.warn('getNonAmmPrices error', e)));

  const results = await Promise.allSettled(promises);

  results
    .filter((r) => r.status === 'fulfilled')
    .forEach(r => {
      Object.assign(prices, r.value);
    });

  return prices;
};

module.exports = {
  getNonAmmPrices
};
