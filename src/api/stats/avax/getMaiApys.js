const { getMasterChefApys } = require('../common/getMasterChefApys');
const MasterChefAbi = require('../../../abis/matic/MaiFarmChef.json');
const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const pools = require('../../../data/avax/maiLpPools.json');
const { joeClient } = require('../../../apollo/client');
const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');

const mai = addressBook.avax.platforms.mai;

const getMaiApys = () => {
  return getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: mai.chef,
    masterchefAbi: MasterChefAbi,
    tokenPerBlock: 'rewardPerBlock',
    hasMultiplier: false,
    pools: pools,
    singlePools: [],
    oracle: 'tokens',
    oracleId: 'avaxQI',
    decimals: '1e18',
    tradingFeeInfoClient: joeClient,
    liquidityProviderFee: 0.0025,
  });
}

module.exports = {
  getMaiApys
};
