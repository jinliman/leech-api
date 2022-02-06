const { avaxWeb3 } = require('../../../utils/web3');
const { getSwapPrices } = require('../common/swap/getSwapPrices');

const _pools = require('../../../data/avax/synapsePools.json');
const pools = _pools;

const getSynapsePrices = async () => {
  return getSwapPrices({
    web3: avaxWeb3,
    pools,
  });
};

module.exports = {
  getSynapsePrices,
};
