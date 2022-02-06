const { moonriverWeb3: web3 } = require('../../../utils/web3');
const { MOONRIVER_CHAIN_ID: chainId } = require('../../../constants');
const { getMultiRewardMasterChefApys } = require('../common/getMultiRewardMasterChefApys');

const pools = require('../../../data/moonriver/solarbeamDualLpPools.json');
const { SOLAR_LPF } = require('../../../constants');
const { solarbeamClient } = require('../../../apollo/client');

const getSolarbeamDualLpApys = async () =>
  await getMultiRewardMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xA3Dce528195b8D15ea166C623DB197B2C3f8D127',
    secondsPerBlock: 1,
    pools: pools,
    oracleId: 'SOLAR',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: solarbeamClient,
    liquidityProviderFee: SOLAR_LPF,
    burn: 0.3,
  });

module.exports = { getSolarbeamDualLpApys };
