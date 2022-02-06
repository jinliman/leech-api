const { moonriverWeb3 } = require('../../../utils/web3');
const { MOONRIVER_CHAIN_ID } = require('../../../constants');
const { getMiniChefApys } = require('../common/getMiniChefApys');
const { sushiMoonriverClient } = require('../../../apollo/client');
const pools = require('../../../data/moonriver/sushiLpPools.json');
const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');

const {
  moonriver: {
    platforms: {
      sushi: { minichef, complexRewarderTime },
    },
    tokens: { mSUSHI, WMOVR },
  },
} = addressBook;

const getSushiLpApys = () => {
  return getMiniChefApys({
    minichefConfig: {
      minichef,
      minichefAbi: SushiMiniChefV2,
      outputOracleId: mSUSHI.symbol,
      tokenPerSecondContractMethodName: 'sushiPerSecond',
    },
    rewarderConfig: {
      rewarder: complexRewarderTime,
      rewarderTokenOracleId: WMOVR.symbol,
      rewarderTotalAllocPoint: 10000,
    },
    pools,
    tradingClient: sushiMoonriverClient,
    web3: moonriverWeb3,
    chainId: MOONRIVER_CHAIN_ID,
  });
};

module.exports = {
  getSushiLpApys,
};
