const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const axios = require('axios');
const BigNumber = require('bignumber.js');
const SpellMasterChef = require('../../../abis/arbitrum/SpellMasterChef.json');

const getSpellApys = async () => {
  const pool = '0xAEA2E71b631fA93683BCF256A8689dFa0e094fcD';
  const tradingAprs = await getCurveBaseApy(pool);
  return await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchefAbi: SpellMasterChef,
    masterchef: '0x06408571E0aD5e8F52eAd01450Bde74E5074dC74',
    tokenPerBlock: 'icePerSecond',
    hasMultiplier: false,
    secondsPerBlock: 1,
    allocPointIndex: '4',
    pools: [
      {
        name: 'spell-avax-mim-crv',
        poolId: 0,
        address: pool,
        oracle: 'lps',
        oracleId: 'curve-avax-mim',
        decimals: '1e18',
      },
    ],
    oracleId: 'SPELL',
    oracle: 'tokens',
    decimals: '1e18',
    tradingAprs: tradingAprs,
    liquidityProviderFee: 0.0002,
  });
};

const getCurveBaseApy = async address => {
  let apys = {};
  try {
    const response = await axios.get('https://api.curve.fi/api/getFactoryAPYs-avalanche');
    const pools = response.data.data.poolDetails;
    pools.forEach(pool => {
      if (pool.poolAddress.toLowerCase() === address.toLowerCase()) {
        const apy = new BigNumber(pool.apy).dividedBy(100);
        apys = { ...apys, ...{ [address.toLowerCase()]: apy } };
      }
    });
  } catch (err) {}
  return apys;
};

module.exports = {
  getSpellApys
};
