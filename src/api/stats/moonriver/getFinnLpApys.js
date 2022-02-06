const { moonriverWeb3: web3 } = require('../../../utils/web3');
const { MOONRIVER_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');

const pools = require('../../../data/moonriver/finnLpPools.json');
const { finnClient } = require('../../../apollo/client');

const getFinnLpApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
    tokenPerBlock: 'finnPerSecond',
    hasMultiplier: false,
    secondsPerBlock: 1,
    pools: pools,
    oracleId: 'FINN',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: finnClient,
    liquidityProviderFee: 0.0025,
  });

module.exports = { getFinnLpApys };
