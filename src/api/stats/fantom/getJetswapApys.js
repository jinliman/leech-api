const { getMasterChefApys } = require('../common/getMasterChefApys');
const { fantomWeb3: web3 } = require('../../../utils/web3');
const { FANTOM_CHAIN_ID: chainId } = require('../../../constants');
const pools = require('../../../data/fantom/jetswapLpPools.json');
const { jetswapFantomClient } = require('../../../apollo/client');

const getJetswapApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
    tokenPerBlock: 'cakePerSecond',
    secondsPerBlock: 1,
    hasMultiplier: false,
    pools: pools,
    singlePools: [
      {
        name: 'jetswap-fantom-fwings',
        poolId: 0,
        address: '0x3D8f1ACCEe8e263F837138829B6C4517473d0688',
        oracle: 'tokens',
        oracleId: 'fWINGS',
        decimals: '1e18',
      },
    ],
    oracleId: 'fWINGS',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: jetswapFantomClient,
    liquidityProviderFee: 0.001,
  });

module.exports = {
  getJetswapApys
};
