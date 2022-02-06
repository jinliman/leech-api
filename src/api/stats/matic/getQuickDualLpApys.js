const { QUICK_LPF } = require('../../../constants');
const { getRewardPoolDualApys } = require('../common/getRewardPoolDualApys');
const pools = require('../../../data/matic/quickDualLpPools.json');
const { quickClient } = require('../../../apollo/client');
const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');
const { getEDecimals } = require('../../../utils/getEDecimals');
const { polygonWeb3 } = require('../../../utils/web3');
const {
  polygon: {
    tokens: { QUICK, MATIC },
  },
} = addressBook;

const getQuickDualLpApys = async () =>
  await getRewardPoolDualApys({
    pools,
    oracleIdA: QUICK.symbol,
    oracleA: 'tokens',
    decimalsA: getEDecimals(QUICK.decimals),
    oracleIdB: MATIC.symbol,
    oracleB: 'tokens',
    decimalsB: getEDecimals(MATIC.decimals),
    tokenAddress: QUICK.address,
    decimals: getEDecimals(QUICK.decimals),
    web3: polygonWeb3,
    chainId: 137,
    tradingFeeInfoClient: quickClient,
    liquidityProviderFee: QUICK_LPF,
    xTokenConfig: {
      xTokenAddress: '0xf28164A485B0B2C90639E47b0f377b4a438a16B1',
      isXTokenAorB: 'A',
    },
  });

module.exports = {
  getQuickDualLpApys,
};
