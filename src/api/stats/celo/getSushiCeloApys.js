const { celoWeb3 } = require('../../../utils/web3');
const { CELO_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const { sushiCeloClient } = require('../../../apollo/client');
const pools = require('../../../data/celo/sushiv2LpPools.json');
const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const { addressBook } = require('../../../../packages/address-book/address-book');
const {
  celo: {
    platforms: {
      sushiCelo: { minichef, complexRewarderTimerv2 },
    },
    tokens: { SUSHIV2, CELO },
  },
} = addressBook;

const getSushiCeloApys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef,
      minichefAbi: SushiMiniChefV2,
      outputOracleId: SUSHIV2.symbol,
      tokenPerSecondContractMethodName: 'sushiPerSecond',
    },
    rewarderConfig: {
      rewarder: complexRewarderTimerv2,
      rewarderTokenOracleId: CELO.symbol,
      rewarderTotalAllocPoint: 10200,
    },
    pools,
    tradingClient: sushiCeloClient,
    web3: celoWeb3,
    chainId: CELO_CHAIN_ID,
  });
};

module.exports = { getSushiCeloApys };
