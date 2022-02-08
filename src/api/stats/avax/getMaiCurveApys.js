const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const { addressBook } = require('../../../../packages/address-book/address-book');
const axios = require('axios');
const BigNumber = require('bignumber.js');
const MasterChefAbi = require('../../../abis/matic/MaiFarmChef.json');
const mai = addressBook.avax.platforms.mai;

const getMaiCurveApys = async () => {
  const pool = '0xb0D2EB3C2cA3c6916FAb8DCbf9d9c165649231AE';
  const tradingAprs = await getCurveBaseApy(pool);
  return await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchefAbi: MasterChefAbi,
    masterchef: mai.chef,
    tokenPerBlock: 'rewardPerBlock',
    hasMultiplier: false,
    pools: [
      {
        name: 'mai-avax-mai-crv',
        poolId: 0,
        address: pool,
        oracle: 'lps',
        oracleId: 'curve-avax-mai',
        decimals: '1e18',
      },
    ],
    oracleId: 'avaxQI',
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
  } catch (err) {
    console.error(err);
  }
  return apys;
};

module.exports = {
  getMaiCurveApys
};
