import { avaxWeb3 } from '../../../utils/web3';
import { AVAX_CHAIN_ID } from '../../../constants';
import { getMiniChefApys } from '../common/getMiniChefApys';
import SynapseMiniChefV2 from '../../../abis/avax/SynapseMiniChefV2.json';
import _pools from '../../../data/avax/synapsePools.json';
const pools = _pools;

import { addressBook } from '../../../../packages/address-book/address-book';
import { AbiItem } from 'web3-utils';

const {
  avax: {
    platforms: {
      synapse: { chef },
    },
    tokens: { SYN },
  },
} = addressBook;

export const getSynapseApys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef: chef,
      minichefAbi: SynapseMiniChefV2,
      outputOracleId: SYN.symbol,
      tokenPerSecondContractMethodName: 'synapsePerSecond',
    },
    pools,
    web3: avaxWeb3,
    chainId: AVAX_CHAIN_ID,
  });
};
