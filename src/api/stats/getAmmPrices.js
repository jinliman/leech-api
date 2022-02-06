`use strict`;

const { fetchAmmPrices } = require('../../utils/fetchAmmPrices');
const { fetchDmmPrices } = require('../../utils/fetchDmmPrices');
const { fetchMooPrices } = require('../../utils/fetchMooPrices');
const { fetchCoinGeckoPrices } = require('../../utils/fetchCoinGeckoPrices');

const { getNonAmmPrices } = require('./getNonAmmPrices');
const bakeryPools = require('../../data/bakeryLpPools.json');
const blizzardLpPools = require('../../data/degens/blizzardLpPools.json');
const alpacaLpPools = require('../../data/alpacaLpPools.json');
const cafePools = require('../../data/cafeLpPools.json');
const cakeLpPools = require('../../data/cakeLpPools.json');
const cakeLpV1Pools = require('../../data/cakeLpV1Pools.json');
const kebabPools = require('../../data/kebabLpPools.json');
const bdollarSbdoPools = require('../../data/bdollarSbdoLpPools.json');
const boltBtdPools = require('../../data/boltBtdLpPools.json');
const boltBtsPools = require('../../data/boltBtsLpPools.json');
const mdexPools = require('../../data/heco/mdexLpPools.json');
const monsterPools = require('../../data/monsterLpPools.json');
const narPools = require('../../data/narLpPools.json');
const nyacashPools = require('../../data/nyacashLpPools.json');
const ramenPools = require('../../data/ramenLpPools.json');
const thugsPools = require('../../data/thugsLpPools.json');
const spongePools = require('../../data/spongeLpPools.json');
const crowPools = require('../../data/crowLpPools.json');
const inchPools = require('../../data/1inchLpPools.json');
const saltPools = require('../../data/degens/saltLpPools.json');
const apePools = require('../../data/degens/apeLpPools.json');
const soupPools = require('../../data/degens/soupLpPools.json');
const autoPools = require('../../data/autoLpPools.json');
const julPools = require('../../data/julLpPools.json');
const memePools = require('../../data/degens/memeFarmLpPools.json');
const nutsPools = require('../../data/degens/nutsLpPools.json');
const slimePools = require('../../data/degens/slimeLpPools.json');
const pangolinPools = require('../../data/avax/pangolinLpPools.json');
const swipePools = require('../../data/swipeLpPools.json');
const comAvaxPools = require('../../data/avax/comAvaxLpPools.json');
const comBscPools = require('../../data/comBscLpPools.json');
const snowballPools = require('../../data/avax/snobLpPools.json');
const pumpyPools = require('../../data/pumpyLpPools.json');
const spacePools = require('../../data/degens/spaceLpPools.json');
const nautPools = require('../../data/degens/nautLpPools.json');
const ellipsisPools = require('../../data/ellipsisLpPools.json');
const hpsPools = require('../../data/degens/hpsLpPools.json');
const zefiPools = require('../../data/degens/zefiLpPools.json');
const thunderPools = require('../../data/degens/thunderLpPools.json');
const swirlPools = require('../../data/swirlLpPools.json');
const swampyPools = require('../../data/degens/swampyLpPools.json');
const yieldBayPools = require('../../data/degens/yieldBayLpPools.json');
const bingoPools = require('../../data/degens/bingoLpPools.json');
const olivePools = require('../../data/avax/oliveLpPools.json');
const bitiPools = require('../../data/degens/bitiLpPools.json');
const mdexBscPools = require('../../data/mdexBscLpPools.json');
const typhPools = require('../../data/typhLpPools.json');
const typhPoolsV1 = require('../../data/typhLpPoolsV1.json');
const marshPools = require('../../data/degens/marshLpPools.json');
const lavaPools = require('../../data/heco/lavaLpPools.json');
const popsiclePools = require('../../data/popsicleLpPools.json');
const comethPools = require('../../data/matic/comethLpPools.json');
const hfiPools = require('../../data/heco/hfiLpPools.json');
const lydPools = require('../../data/avax/lydLpPools.json');
const icarusPools = require('../../data/icarusLpPools.json');
const quickPools = require('../../data/matic/quickLpPools.json');
const krillPools = require('../../data/matic/krillLpPools.json');
const sushiLpPools = require('../../data/matic/sushiLpPools.json');
const sushiOhmPools = require('../../data/matic/sushiOhmLpPools.json');
const satisPools = require('../../data/degens/satisLpPools.json');
const satisXPools = require('../../data/degens/satisXLpPools.json');
const zefiV2Pools = require('../../data/degens/zefiLpPoolsV2.json');
const spookyPools = require('../../data/fantom/spookyLpPools.json');
const froyoPools = require('../../data/fantom/froyoLpPools.json');
const esterPools = require('../../data/fantom/esterLpPools.json');
const comethMultiPools = require('../../data/matic/comethMultiLpPools.json');
const goalPools = require('../../data/degens/goalLpPools.json');
const tofyPools = require('../../data/degens/tofyLpPools.json');
const gondolaPools = require('../../data/avax/gondolaLpPools.json');
const dopplePools = require('../../data/doppleLpPools.json');
const garudaPools = require('../../data/degens/garudaLpPools.json');
const ironPools = require('../../data/degens/ironLpPools.json');
const ironDndPools = require('../../data/degens/ironDndLpPools.json');
const polyzapPools = require('../../data/matic/polyzapLpPools.json');
const jetswapPools = require('../../data/jetswapLpPools.json');
const dumplingPools = require('../../data/degens/dumplingLpPools.json');
const grandPools = require('../../data/grandLpPools.json');
const ironMaticPools = require('../../data/matic/ironLpPools.json');
const ironTitanPools = require('../../data/matic/ironTitanLpPools.json');
const ironQuickPools = require('../../data/matic/ironQuickLpPools.json');
const polycatQuickPool = require('../../data/matic/polycatQuickLpPool.json');
const polycatDfynPool = require('../../data/matic/polycatDfynLpPool.json');
const polycatSushiPool = require('../../data/matic/polycatSushiLpPool.json');
const lendhubPools = require('../../data/heco/lendhubLpPools.json');
const pantherPools = require('../../data/degens/pantherLpPools.json');
const waultPools = require('../../data/waultLpPools.json');
const tenfiPools = require('../../data/tenfiLpPools.json');
const burgerPools = require('../../data/burgerLpPools.json');
const tombPools = require('../../data/fantom/tombLpPools.json');
const spiritPools = require('../../data/fantom/spiritPools.json');
const spiritGauges = require('../../data/fantom/spiritGauges.json');
const wexPolyPools = require('../../data/matic/wexPolyLpPools.json');
const icarusV2Pools = require('../../data/icarusV2LpPools.json');
const merlinPools = require('../../data/merlinLpPools.json');
const polypupLpPools = require('../../data/matic/polypupLpPools.json');
const polypupBallLpPools = require('../../data/matic/polypupBallLpPools.json');
const polyyeldQuickLpPools = require('../../data/matic/polyyeldQuickLpPools.json');
const polyyeldSushiLpPools = require('../../data/matic/polyyeldSushiLpPools.json');
const polyyeldApeLpPools = require('../../data/matic/polyyeldApeLpPools.json');
const polyyeldL2LpPools = require('../../data/matic/polyyeldL2LpPools.json');
const apePolyPools = require('../../data/matic/apePolyLpPools.json');
const polyQuityPools = require('../../data/matic/polyQuityLpPools.json');
const keeper50pools = require('../../data/matic/50kLpPools.json');
const dfynPools = require('../../data/matic/dfynLpPools.json');
const boneswapQuickPools = require('../../data/matic/boneswapQuickLpPools.json');
const boneswapSushiPools = require('../../data/matic/boneswapSushiLpPools.json');
const boneswapApePools = require('../../data/matic/boneswapApeLpPools.json');
const maiPools = require('../../data/matic/maiLpPools.json');
const jetswapPolyPools = require('../../data/matic/jetswapLpPools.json');
const farmheroPolygonPools = require('../../data/matic/farmheroPools.json');
const farmheroBscPools = require('../../data/farmheroPools.json');
const ironSwapPools = require('../../data/matic/ironSwapLpPools.json');
const ooePools = require('../../data/ooeLpPools.json');
const telxchangePools = require('../../data/matic/telxchangePools.json');
const kingdefiPools = require('../../data/degens/kingdefiLpPools.json');
const rabbitPools = require('../../data/degens/rabbitLpPools.json');
const dinoPools = require('../../data/matic/dinoswapLpPools.json');
const fruitPools = require('../../data/degens/fruitLpPools.json');
const pswampPools = require('../../data/matic/swampLpPools.json');
const polyCrackerPools = require('../../data/matic/polyCrackerLpPools.json');
const peraPools = require('../../data/degens/peraLpPools.json');
const sushiOnePools = require('../../data/one/sushiLpPools.json');
const stablequantPools = require('../../data/degens/stablequantLpPools.json');
const honeyPools = require('../../data/degens/honeyFarmLpPools.json');
const steakhouseLpPools = require('../../data/fantom/steakhouseLpPools.json');
const stakesteakLpPools = require('../../data/fantom/stakesteakLpPools.json');
const polygonFarmPools = require('../../data/matic/polygonFarmLpPools.json');
const pearzapPools = require('../../data/matic/pearzapLpPools.json');
const tosdisPools = require('../../data/degens/tosdisLpPools.json');
const yelPools = require('../../data/degens/yelLpPools.json');
const omnifarmPools = require('../../data/degens/omnifarmLpPools.json');
const viralataLpPools = require('../../data/degens/viralataLpPools.json');
const joePools = require('../../data/avax/joeLpPools.json');
const joeDualLpPools = require('../../data/avax/joeDualLpPools.json');
const elkPools = require('../../data/degens/elkLpPools.json');
const longPools = require('../../data/degens/longLpPools.json');
const CZFPools = require('../../data/degens/CZFLpPools.json');
const sushiArbPools = require('../../data/arbitrum/sushiLpPools.json');
const arbiNyanPools = require('../../data/arbitrum/arbiNyanLpPools.json');
const pearzapBscPools = require('../../data/degens/pearzapLpPools.json');
const sandmanPools = require('../../data/matic/sandmanLpPools.json');
const sushiMimPools = require('../../data/arbitrum/sushiLpMimPools.json');
const polyalphaPools = require('../../data/matic/polyalphaLpPools.json');
const annexPools = require('../../data/degens/annexLpPools.json');
const polywisePools = require('../../data/matic/polywiseLpPools.json');
const polySagePools = require('../../data/matic/polysageLpPools.json');
const pacocaPools = require('../../data/degens/pacocaLpPools.json');
const jetswapFantomPools = require('../../data/fantom/jetswapLpPools.json');
const tetuPools = require('../../data/matic/tetuLpPools.json');
const geistPools = require('../../data/fantom/geistLpPools.json');
const singularPolyPools = require('../../data/matic/singularLpPools.json');
const singularBscPools = require('../../data/degens/singularLpPools.json');
const singularAvaxPools = require('../../data/avax/singularLpPools.json');
const singularFantomPools = require('../../data/fantom/singularLpPools.json');
const cafeBscPools = require('../../data/degens/cafeLpPools.json');
const cafePolyPools = require('../../data/matic/cafeLpPools.json');
const oldPools = require('../../data/archive/oldLpPools.json');
const kyberPools = require('../../data/matic/kyberLpPools.json');
const babyPools = require('../../data/degens/babyLpPools.json');
const quickDualLpPools = require('../../data/matic/quickDualLpPools.json');
const pearzapFantomPools = require('../../data/fantom/pearzapLpPools.json');
const sushiCeloPools = require('../../data/celo/sushiLpPools.json');
const mooTokens = require('../../data/mooTokens.json');
const wsgPools = require('../../data/degens/wsgLpPools.json');
const summitPools = require('../../data/fantom/summitLpPools.json');
const solarbeamPools = require('../../data/moonriver/solarbeamLpPools.json');
const sushiMr = require('../../data/moonriver/sushiLp.json');
const sushiMrPools = require('../../data/moonriver/sushiLpPools.json');
const blizzPools = require('../../data/avax/blizzLpPools.json');
const vvsPools = require('../../data/cronos/vvsLpPools.json');
const cronaPools = require('../../data/cronos/cronaLpPools.json');
const solarbeamDualLpPools = require('../../data/moonriver/solarbeamDualLpPools.json');
const trisolarisLpPools = require('../../data/aurora/trisolarisLpPools.json');
const maiAvaxLpPools = require('../../data/avax/maiLpPools.json');
const bisonPools = require('../../data/degens/bisonLpPools.json');
const finnLpPools = require('../../data/moonriver/finnLpPools.json');
const blockMinePools = require('../../data/degens/blockMineLpPools.json');
const biswapPools = require('../../data/biswapLpPools.json');
const chargePools = require('../../data/degens/chargeLpPools.json');
const charmPools = require('../../data/fantom/charmLpPools.json');
const solarbeamDualLpV2Pools = require('../../data/moonriver/solarbeamDualLpV2Pools.json');
const liquidusPools = require('../../data/cronos/liquidusLpPools.json');
const sushiv2Celo = require('../../data/celo/sushiv2LpPools.json');
const oldDmmPools = require('../../data/archive/oldDmmPools.json');
const popsicleFantomPools = require('../../data/fantom/popsicleLpPools.json');
const fusefiPools = require('../../data/fuse/fusefiLpPools.json');
const netswapPools = require('../../data/metis/netswapLpPools.json');
const dibsLpPools = require('../../data/degens/dibsLpPools.json');
const pangolinV2Pools = require('../../data/avax/pangolinv2LpPools.json');

const INIT_DELAY = 0 * 60 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// FIXME: if this list grows too big we might hit the ratelimit on initialization everytime
const pools = [
  ...pangolinV2Pools,
  ...dibsLpPools,
  ...netswapPools,
  ...fusefiPools,
  ...popsicleFantomPools,
  ...sushiv2Celo,
  ...liquidusPools,
  ...biswapPools,
  ...solarbeamDualLpV2Pools,
  ...charmPools,
  ...chargePools,
  ...blockMinePools,
  ...oldPools,
  ...finnLpPools,
  ...bisonPools,
  ...maiAvaxLpPools,
  ...trisolarisLpPools,
  ...solarbeamDualLpPools,
  ...cronaPools,
  ...vvsPools,
  ...blizzPools,
  ...sushiMrPools,
  ...sushiMr,
  ...solarbeamPools,
  ...summitPools,
  ...wsgPools,
  ...pearzapFantomPools,
  ...sushiCeloPools,
  ...quickDualLpPools,
  ...babyPools,
  ...cafePolyPools,
  ...cafeBscPools,
  ...geistPools,
  ...singularPolyPools,
  ...singularBscPools,
  ...singularAvaxPools,
  ...singularFantomPools,
  ...jetswapFantomPools,
  ...tetuPools,
  ...polywisePools,
  ...polySagePools,
  ...pacocaPools,
  ...annexPools,
  ...sushiMimPools,
  ...polyalphaPools,
  ...sandmanPools,
  ...pearzapBscPools,
  ...CZFPools,
  ...arbiNyanPools,
  ...sushiArbPools,
  ...longPools,
  ...elkPools,
  ...viralataLpPools,
  ...joePools,
  ...joeDualLpPools,
  ...omnifarmPools,
  ...tosdisPools,
  ...yelPools,
  ...pearzapPools,
  ...polygonFarmPools,
  ...steakhouseLpPools,
  ...stakesteakLpPools,
  ...honeyPools,
  ...stablequantPools,
  ...sushiOnePools,
  ...peraPools,
  ...polyCrackerPools,
  ...pswampPools,
  ...fruitPools,
  ...dinoPools,
  ...farmheroBscPools,
  ...farmheroPolygonPools,
  ...rabbitPools,
  ...kingdefiPools,
  ...telxchangePools,
  ...ooePools,
  ...ironSwapPools,
  ...jetswapPolyPools,
  ...maiPools,
  ...boneswapApePools,
  ...boneswapSushiPools,
  ...boneswapQuickPools,
  ...polycatDfynPool,
  ...dfynPools,
  ...keeper50pools,
  ...polyQuityPools,
  ...polypupBallLpPools,
  ...polypupLpPools,
  ...apePolyPools,
  ...polyyeldL2LpPools,
  ...polyyeldApeLpPools,
  ...polyyeldQuickLpPools,
  ...polyyeldSushiLpPools,
  ...merlinPools,
  ...icarusV2Pools,
  ...spiritPools,
  ...spiritGauges,
  ...wexPolyPools,
  ...tombPools,
  ...burgerPools,
  ...waultPools,
  ...tenfiPools,
  ...pantherPools,
  ...lendhubPools,
  ...polycatSushiPool,
  ...polycatQuickPool,
  ...ironQuickPools,
  ...ironTitanPools,
  ...ironMaticPools,
  ...grandPools,
  ...dumplingPools,
  ...jetswapPools,
  ...polyzapPools,
  ...ironDndPools,
  ...ironPools,
  ...garudaPools,
  ...dopplePools,
  ...gondolaPools,
  ...tofyPools,
  ...goalPools,
  ...comethMultiPools,
  ...esterPools,
  ...froyoPools,
  ...spookyPools,
  ...zefiV2Pools,
  ...satisXPools,
  ...satisPools,
  ...krillPools,
  ...sushiLpPools,
  ...sushiOhmPools,
  ...quickPools,
  ...lydPools,
  ...icarusPools,
  ...hfiPools,
  ...comethPools,
  ...popsiclePools,
  ...lavaPools,
  ...marshPools,
  ...typhPools,
  ...typhPoolsV1,
  ...mdexBscPools,
  ...bitiPools,
  ...olivePools,
  ...bingoPools,
  ...yieldBayPools,
  ...swampyPools,
  ...swirlPools,
  ...thunderPools,
  ...zefiPools,
  ...hpsPools,
  ...ellipsisPools,
  ...nautPools,
  ...spacePools,
  ...pumpyPools,
  ...snowballPools,
  ...comBscPools,
  ...comAvaxPools,
  ...pangolinPools,
  ...swipePools,
  ...slimePools,
  ...blizzardLpPools,
  ...nutsPools,
  ...memePools,
  ...julPools,
  ...autoPools,
  ...alpacaLpPools,
  ...soupPools,
  ...apePools,
  ...saltPools,
  ...inchPools,
  ...crowPools,
  ...ramenPools,
  ...cafePools,
  ...bdollarSbdoPools,
  ...spongePools,
  ...bakeryPools,
  ...kebabPools,
  ...boltBtdPools,
  ...boltBtsPools,
  ...mdexPools,
  ...monsterPools,
  ...narPools,
  ...nyacashPools,
  ...thugsPools,
  ...cakeLpV1Pools,
  ...cakeLpPools,
];

const dmmPools = [...kyberPools, ...oldDmmPools];

const coinGeckoCoins = [
  'stasis-eurs',
  'tether-eurt',
  'par-stablecoin',
  'jarvis-synthetic-euro',
  'jpyc',
];

const knownPrices = {
  BUSD: 1,
  USDT: 1,
  HUSD: 1,
  DAI: 1,
  USDC: 1,
  UST: 1,
  USDN: 1,
  cUSD: 1,
  asUSDC: 1,
};

let tokenPricesCache;
let lpPricesCache;

const updateAmmPrices = async () => {
  try {
    const coinGeckoPrices = fetchCoinGeckoPrices(coinGeckoCoins);
    const ammPrices = fetchAmmPrices(pools, knownPrices);
    const dmmPrices = fetchDmmPrices(dmmPools, knownPrices);

    const mooPrices = ammPrices.then(async ({ poolPrices, tokenPrices }) => {
      return await fetchMooPrices(mooTokens, tokenPrices, poolPrices);
    });

    const tokenPrices = ammPrices.then(async ({ _, tokenPrices }) => {
      const dmm = await dmmPrices;
      const mooTokenPrices = await mooPrices;
      return { ...tokenPrices, ...dmm.tokenPrices, ...mooTokenPrices, ...(await coinGeckoPrices) };
    });

    const lpPrices = ammPrices.then(async ({ poolPrices, _ }) => {
      const dmm = await dmmPrices;
      const nonAmmPrices = await getNonAmmPrices(await tokenPrices);
      return { ...poolPrices, ...dmm.poolPrices, ...nonAmmPrices };
    });

    await tokenPrices;
    await lpPrices;

    tokenPricesCache = tokenPrices;
    lpPricesCache = lpPrices;

    return {
      tokenPrices,
      lpPrices,
    };
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(updateAmmPrices, REFRESH_INTERVAL);
  }
};

const getAmmTokensPrices = async () => {
  return await tokenPricesCache;
};

const getAmmLpPrices = async () => {
  return await lpPricesCache;
};

const getAmmTokenPrice = async tokenSymbol => {
  const tokenPrices = await getAmmTokensPrices();
  if (tokenPrices.hasOwnProperty(tokenSymbol)) {
    return tokenPrices[tokenSymbol];
  }
  console.error(`Unknown token '${tokenSymbol}'. Consider adding it to .json file`);
};

const getAmmLpPrice = async lpName => {
  const lpPrices = await getAmmLpPrices();
  if (lpPrices.hasOwnProperty(lpName)) {
    return lpPrices[lpName];
  }
  console.error(`Unknown liquidity pair '${lpName}'. Consider adding it to .json file`);
};

const init =
  // Flexible delayed initialization used to work around ratelimits
  new Promise((resolve, reject) => {
    setTimeout(resolve, INIT_DELAY);
  }).then(updateAmmPrices);

tokenPricesCache = init.then(({ tokenPrices, lpPrices }) => tokenPrices);
lpPricesCache = init.then(({ tokenPrices, lpPrices }) => lpPrices);

module.exports = {
  getAmmTokensPrices,
  getAmmLpPrices,
  getAmmTokenPrice,
  getAmmLpPrice,
};
