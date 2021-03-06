const { metisWeb3: web3 } = require('../../../utils/web3');
const { METIS_CHAIN_ID: chainId, NET_LPF } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const { getEDecimals } = require('../../../utils/getEDecimals');
const pools = require('../../../data/metis/netswapLpPools.json');
const { netswapClient } = require('../../../apollo/client');
const { addressBook } = require('../../../../packages/address-book/address-book');
const {
  metis: {
    platforms: {
      netswap: { masterchef },
    },
    tokens: { NETT },
  },
} = addressBook;

const getNetswapApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: masterchef,
    tokenPerBlock: 'nettPerSec',
    secondsPerBlock: 1,
    hasMultiplier: false,
    pools: pools,
    oracleId: 'NETT',
    oracle: 'tokens',
    decimals: getEDecimals(NETT.decimals),
    tradingFeeInfoClient: netswapClient,
    liquidityProviderFee: NET_LPF,
  });

module.exports = {
  getNetswapApys
};
