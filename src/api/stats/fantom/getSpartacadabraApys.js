const { fantomWeb3: web3 } = require('../../../utils/web3');
const { FANTOM_CHAIN_ID: chainId, SPOOKY_LPF } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const { getCurveFactoryApy } = require('../common/curve/getCurveApyData');
const { getTradingFeeApr } = require('../../../utils/getTradingFeeApr');
const { spookyClient } = require('../../../apollo/client');

const SpellMasterChef = require('../../../abis/arbitrum/SpellMasterChef.json');
const lpPools = require('../../../data/fantom/charmLpPools.json');

const getSpartacadabraApys = async () => {
  const pool = '0x075C1D1d7E9E1aF077B0b6117C6eA06CD0a260b5';

  const curveTradingAprs = await getCurveFactoryApy(
    pool,
    'https://api.curve.fi/api/getFactoryAPYs-fantom'
  );
  const pairAddresses = lpPools.map(pool => pool.address);
  const lpTradingAprs = await getTradingFeeApr(spookyClient, pairAddresses, SPOOKY_LPF);
  const tradingAprs = { ...curveTradingAprs, ...lpTradingAprs };

  return await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchefAbi: SpellMasterChef,
    masterchef: '0x37dcB419bE789d94b3216b922C216f5FA3266cfe',
    tokenPerBlock: 'icePerSecond',
    hasMultiplier: false,
    secondsPerBlock: 1,
    allocPointIndex: '4',
    pools: [
      ...lpPools,
      {
        name: 'spartacadabra-lambda-crv',
        poolId: 0,
        address: pool,
        oracle: 'lps',
        oracleId: 'curve-ftm-lambda',
        decimals: '1e18',
      },
    ],
    oracleId: 'CHARM',
    oracle: 'tokens',
    decimals: '1e18',
    tradingAprs: tradingAprs,
    liquidityProviderFee: SPOOKY_LPF,
  });
};

module.exports = {
  getSpartacadabraApys
};
