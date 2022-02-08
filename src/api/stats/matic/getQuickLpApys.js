const { QUICK_LPF } = require('../../../constants');
const { getRewardPoolApys } = require('../common/getRewardPoolApys');
const pools = require('../../../data/matic/quickLpPools.json');
const { quickClient } = require('../../../apollo/client');
const { addressBook } = require('../../../../packages/address-book/address-book');
const { getEDecimals } = require('../../../utils/getEDecimals');
const { polygonWeb3 } = require('../../../utils/web3');
const {
  polygon: {
    tokens: { QUICK },
  },
} = addressBook;

const getQuickLpApys = async () =>
  await getRewardPoolApys({
    pools,
    oracleId: 'QUICK',
    oracle: 'tokens',
    tokenAddress: QUICK.address,
    decimals: getEDecimals(QUICK.decimals),
    web3: polygonWeb3,
    chainId: 137,
    tradingFeeInfoClient: quickClient,
    liquidityProviderFee: QUICK_LPF,
    isRewardInXToken: true,
    xTokenAddress: '0xf28164A485B0B2C90639E47b0f377b4a438a16B1',
  });

module.exports = {
  getQuickLpApys,
};
