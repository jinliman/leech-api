const { getMasterChefApys } = require('../../common/getMasterChefApys');
const { bscWeb3: web3 } = require('../../../../utils/web3');
const { BSC_CHAIN_ID: chainId } = require('../../../../constants');
const pools = require('../../../../data/biswapLpPools.json');

const getBiswapApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xDbc1A13490deeF9c3C12b44FE77b503c1B061739',
    tokenPerBlock: 'BSWPerBlock',
    hasMultiplier: false,
    pools: pools,
    singlePools: [
      {
        name: 'biswap-biswap',
        poolId: 0,
        address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
        oracle: 'tokens',
        oracleId: 'BSW',
        decimals: '1e18',
      },
    ],
    oracleId: 'BSW',
    oracle: 'tokens',
    decimals: '1e18',
  });

module.exports = {
  getBiswapApys
};
