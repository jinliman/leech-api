const { APEPOLY_LPF } = require('../../../constants');
const { getMasterChefApys } = require('./getMaticMasterChefApys');
const pools = require('../../../data/matic/singularLpPools.json');
const { apePolyClient } = require('../../../apollo/client');

const getSingularApys = async () =>
  await getMasterChefApys({
    masterchef: '0x9762Fe3ef5502dF432de41E7765b0ccC90E02e92',
    tokenPerBlock: 'singPerSec',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'pSING',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    tradingFeeInfoClient: apePolyClient,
    liquidityProviderFee: APEPOLY_LPF,
  });

module.exports = { getSingularApys };
