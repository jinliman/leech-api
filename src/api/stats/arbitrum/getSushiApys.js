const { arbitrumWeb3: web3 } = require('../../../utils/web3');
const { ARBITRUM_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');

const pools = require('../../../data/arbitrum/sushiLpPools.json');
const { SUSHI_LPF } = require('../../../constants');
const SushiMiniChefV2 = require('../../../abis/matic/SushiMiniChefV2.json');
const { sushiArbitrumClient } = require('../../../apollo/client');

const getSushiLpApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    masterchefAbi: SushiMiniChefV2,
    tokenPerBlock: 'sushiPerSecond',
    hasMultiplier: false,
    secondsPerBlock: 1,
    allocPointIndex: '2',
    pools: pools,
    oracleId: 'SUSHI',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: sushiArbitrumClient,
    liquidityProviderFee: SUSHI_LPF,
  });

module.exports = { getSushiLpApys };
