const { moonriverWeb3: web3 } = require('../../../utils/web3');
const { MOONRIVER_CHAIN_ID: chainId } = require('../../../constants');
const { getMultiRewardMasterChefApys } = require('../common/getMultiRewardMasterChefApys');

const pools = require('../../../data/moonriver/solarbeamDualLpV2Pools.json');
const { SOLAR_LPF } = require('../../../constants');
const { solarbeamClient } = require('../../../apollo/client');

const getSolarbeamDualLpV2Apys = async () =>
  await getMultiRewardMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x0329867a8c457e9F75e25b0685011291CD30904F',
    secondsPerBlock: 1,
    pools: pools,
    oracleId: 'SOLAR',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: solarbeamClient,
    liquidityProviderFee: SOLAR_LPF,
  });

module.exports = { getSolarbeamDualLpV2Apys };
