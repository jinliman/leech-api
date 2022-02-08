const { polygonWeb3 } = require('../../../utils/web3');
const { POLYGON_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const { sushiClient } = require('../../../apollo/client');
const pools = require('../../../data/matic/sushiLpPools.json');
const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const { addressBook } = require('../../../../packages/address-book/address-book');

const {
  polygon: {
    platforms: {
      sushi: { minichef, complexRewarderTime },
    },
    tokens: { SUSHI, WMATIC },
  },
} = addressBook;

const getSushiLpApys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef,
      minichefAbi: SushiMiniChefV2,
      outputOracleId: SUSHI.symbol,
      tokenPerSecondContractMethodName: 'sushiPerSecond',
    },
    rewarderConfig: {
      rewarder: complexRewarderTime,
      rewarderTokenOracleId: WMATIC.symbol,
      rewarderTotalAllocPoint: 1000,
    },
    pools,
    tradingClient: sushiClient,
    web3: polygonWeb3,
    chainId: POLYGON_CHAIN_ID,
  });
};

module.exports = {
  getSushiLpApys,
};
