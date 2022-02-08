const { avaxWeb3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const SynapseMiniChefV2 = require('../../../abis/avax/SynapseMiniChefV2.json');
const _pools = require('../../../data/avax/synapsePools.json');
const pools = _pools;

const { addressBook } = require('../../../../packages/address-book/address-book');

const {
  avax: {
    platforms: {
      synapse: { chef },
    },
    tokens: { SYN },
  },
} = addressBook;

const getSynapseApys = () => {
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

module.exports = {
  getSynapseApys
};
