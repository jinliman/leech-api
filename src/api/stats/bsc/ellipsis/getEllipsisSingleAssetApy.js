import { bscWeb3 as web3 } from '../../../../utils/web3';
import getMultiFeeDistributionSingleAssetApy from '../../common/getMultiFeeDistributionSingleAssetApy';
import { addressBook } from '../../../../../packages/address-book/address-book';

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

module.exports = getEllipsisSingleAssetApy;
