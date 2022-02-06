const { avaxWeb3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const { pangolinClient } = require('../../../apollo/client');

const pools = require('../../../data/avax/pangolinv2LpPools.json');
const PangolinChef = require('../../../abis/avax/PangolinChef.json');
const { PANGOLIN_LPF } = require('../../../constants');

const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');
const {
  avax: {
    platforms: {
      pangolin: { minichef },
    },
    tokens: { PNG },
  },
} = addressBook;

const getPangolinV2Apys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef,
      minichefAbi: PangolinChef,
      outputOracleId: PNG.symbol,
      tokenPerSecondContractMethodName: 'rewardPerSecond',
    },
    pools,
    tradingClient: pangolinClient,
    sushiClient: false,
    liquidityProviderFee: PANGOLIN_LPF,
    web3: avaxWeb3,
    chainId: AVAX_CHAIN_ID,
  });
};

module.exports = {
  getPangolinV2Apys
};
