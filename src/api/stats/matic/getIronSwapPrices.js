const { polygonWeb3 } = require('../../../utils/web3');
const { getSwapPrices } = require('../common/swap/getSwapPrices');
const _pools = require('../../../data/matic/ironSwapPools.json');
const pools = _pools;

const getIronSwapPrices = async () => {
  return getSwapPrices({
    web3: polygonWeb3,
    pools,
  });
};

module.exports = {
  getIronSwapPrices,
};
