const { getMasterChefApys } = require('./getMaticMasterChefApys');
const MasterChefAbi = require('../../../abis/matic/MaiFarmChef.json');
const pools = require('../../../data/matic/maiLpPools.json');
const { quickClient } = require('../../../apollo/client');
const { addressBook } = require('../../../../packages/blockchain-addressbook/build/address-book');

const mai = addressBook.polygon.platforms.mai;

const getMaiApys = async () =>
  getMasterChefApys({
    masterchef: mai.chef,
    masterchefAbi: MasterChefAbi,
    tokenPerBlock: 'rewardPerBlock',
    hasMultiplier: false,
    pools: pools,
    singlePools: [],
    oracle: 'tokens',
    oracleId: 'QI',
    decimals: '1e18',
    tradingFeeInfoClient: quickClient,
    liquidityProviderFee: 0.0025,
  });

module.exports = {
  getMaiApys
};
