const { getRewardPoolApys } = require('../../common/getRewardPoolApys');
const pools = require('../../../../data/degens/wsgLpPools.json');
const { PCS_LPF } = require('../../../../constants');
const { cakeClient } = require('../../../../apollo/client');

const { BSC_CHAIN_ID: chainId } = require('../../../../constants');
const { bscWeb3: web3 } = require('../../../../utils/web3');

const getWSGApys = async () =>
  await getRewardPoolApys({
    web3: web3,
    chainId: chainId,
    pools: [
      ...pools,
      ...[
        {
          name: 'wsg-wsg',
          address: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
          rewardPool: '0x712f5641d391e96F0425147F0Fb65103C041C0b6',
          oracle: 'tokens',
          oracleId: 'WSG',
          decimals: '1e18',
        },
      ],
    ],
    oracleId: 'WSG',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: cakeClient,
    liquidityProviderFee: PCS_LPF,
  });

module.exports = {
  getWSGApys,
};
