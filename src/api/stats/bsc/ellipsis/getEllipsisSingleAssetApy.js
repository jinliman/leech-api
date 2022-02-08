const { bscWeb3: web3 } = require('../../../../utils/web3');
const { getMultiFeeDistributionSingleAssetApy } = require('../../common/getMultiFeeDistributionSingleAssetApy');
const { addressBook } = require('../../../../../packages/address-book/address-book');

const {
  bsc: {
    platforms: { ellipsis },
    tokens: { EPS, BUSD },
  },
} = addressBook;

const getEllipsisSingleAssetApy = async () => {
  const params = {
    web3,
    multiFeeDistributionAddress: ellipsis.multiFeeDistribution,
    want: EPS,
    output: BUSD,
    poolName: 'ellipsis-eps',
  };
  const apy = await getMultiFeeDistributionSingleAssetApy(params);
  return apy;
};

module.exports = {
  getEllipsisSingleAssetApy
};
