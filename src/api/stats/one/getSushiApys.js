const { oneWeb3 } = require('../../../utils/web3');
const { ONE_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const { sushiOneClient } = require('../../../apollo/client');
const pools = require('../../../data/one/sushiLpPools.json');
const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');

const {
  one: {
    platforms: {
      sushi: { minichef, complexRewarderTime },
    },
    tokens: { oneSUSHI, WONE },
  },
} = addressBook;

const getSushiLpApys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef,
      minichefAbi: SushiMiniChefV2,
      outputOracleId: oneSUSHI.symbol,
      tokenPerSecondContractMethodName: 'sushiPerSecond',
    },
    rewarderConfig: {
      rewarder: complexRewarderTime,
      rewarderTokenOracleId: WONE.symbol,
      rewarderTotalAllocPoint: 9600,
    },
    pools,
    tradingClient: sushiOneClient,
    web3: oneWeb3,
    chainId: ONE_CHAIN_ID,
  });
};

module.exports = {
  getSushiLpApys,
};
