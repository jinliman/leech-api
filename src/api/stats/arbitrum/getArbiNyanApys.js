const { arbitrumWeb3: web3 } = require('../../../utils/web3');
const { ARBITRUM_CHAIN_ID: chainId } = require('../../../constants');
const { getRewardPoolApys } = require('../common/getRewardPoolApys');

const pools = require('../../../data/arbitrum/arbiNyanLpPools.json');
const { SUSHI_LPF } = require('../../../constants');
const { sushiArbitrumClient } = require('../../../apollo/client');

const getArbiNyanApys = async () =>
  await getRewardPoolApys({
    web3: web3,
    chainId: chainId,
    pools: [
      ...pools,
      ...[
        {
          name: 'arbinyan-nyan',
          address: '0xeD3fB761414DA74b74F33e5c5a1f78104b188DfC',
          rewardPool: '0x32e5594F14de658b0d577D6560fA0d9C6F1aa724',
          oracle: 'tokens',
          oracleId: 'NYAN',
          decimals: '1e18',
        },
      ],
    ],
    oracleId: 'NYAN',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: sushiArbitrumClient,
    liquidityProviderFee: SUSHI_LPF,
  });

module.exports = { getArbiNyanApys };
