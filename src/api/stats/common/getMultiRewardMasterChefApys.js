import BigNumber from 'bignumber.js';
import { MultiCall } from 'eth-multicall';
import { multicallAddress } from '../../../utils/web3';
import MasterChefAbi from '../../../abis/IMultiRewardMasterChef.json';
import { isSushiClient, isBeetClient } from '../../../apollo/client';
import getApyBreakdown from '../common/getApyBreakdown';
import fetchPrice from '../../../utils/fetchPrice';
import getBlockTime from '../../../utils/getBlockTime';
import { getEDecimals } from '../../../utils/getEDecimals';
import {
  getTradingFeeAprSushi,
  getTradingFeeAprBalancer,
  getTradingFeeApr,
} from '../../../utils/getTradingFeeApr';

export const getMultiRewardMasterChefApys = async (
  masterchefParams
) => {
  masterchefParams.pools = [
    ...(masterchefParams.pools ?? []),
    ...(masterchefParams.singlePools ?? []),
  ];

  const tradingAprs = await getTradingAprs(masterchefParams);
  const farmApys = await getFarmApys(masterchefParams);

  const liquidityProviderFee = masterchefParams.liquidityProviderFee ?? 0.003;

  return getApyBreakdown(masterchefParams.pools, tradingAprs, farmApys, liquidityProviderFee);
};

const getTradingAprs = async (params) => {
  let tradingAprs = params.tradingAprs ?? {};
  const client = params.tradingFeeInfoClient;
  const fee = params.liquidityProviderFee;
  if (client && fee) {
    const pairAddresses = params.pools.map(pool => pool.address.toLowerCase());
    const getAprs = isSushiClient(client)
      ? getTradingFeeAprSushi
      : isBeetClient(client)
      ? getTradingFeeAprBalancer
      : getTradingFeeApr;
    const aprs = await getAprs(client, pairAddresses, fee);
    tradingAprs = { ...tradingAprs, ...aprs };
  }
  return tradingAprs;
};

const getFarmApys = async (params) => {
  const apys = [];

  const { balances, rewardTokens, rewardDecimals, rewardsPerSec } = await getPoolsData(params);
  const secondsPerBlock = params.secondsPerBlock ?? (await getBlockTime(params.chainId));

  for (let i = 0; i < params.pools.length; i++) {
    const pool = params.pools[i];

    const oracle = pool.oracle ?? 'lps';
    const id = pool.oracleId ?? pool.name;
    const stakedPrice = await fetchPrice({ oracle, id });
    const totalStakedInUsd = balances[i].times(stakedPrice).dividedBy(pool.decimals ?? '1e18');

    let poolRewardsInUsd = new BigNumber(0);
    for (let j = 0; j < rewardTokens[i].length; j++) {
      const rewardPrice = await fetchPrice({ oracle: 'tokens', id: rewardTokens[i][j] });
      const rewardInUsd = new BigNumber(rewardsPerSec[i][j])
        .dividedBy(getEDecimals(rewardDecimals[i][j]))
        .times(rewardPrice)
        .times(1 - (pool.depositFee ?? 0));
      poolRewardsInUsd = poolRewardsInUsd.plus(rewardInUsd);
    }

    const secondsPerYear = 31536000;
    let yearlyRewardsInUsd = poolRewardsInUsd.dividedBy(secondsPerBlock).times(secondsPerYear);

    if (params.burn) {
      yearlyRewardsInUsd = yearlyRewardsInUsd.times(1 - params.burn);
    }

    const apy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
    apys.push(apy);
    if (params.log) {
      console.log(
        pool.name,
        apy.toNumber(),
        totalStakedInUsd.valueOf(),
        yearlyRewardsInUsd.valueOf()
      );
    }
  }

  return apys;
};

const getPoolsData = async (params) => {
  const masterchefContract = new params.web3.eth.Contract(MasterChefAbi, params.masterchef);
  const multicall = new MultiCall(params.web3, multicallAddress(params.chainId));
  const chefCalls = [];
  params.pools.forEach(pool => {
    chefCalls.push({
      balance: masterchefContract.methods.poolTotalLp(pool.poolId),
      rewards: masterchefContract.methods.poolRewardsPerSec(pool.poolId),
    });
  });

  const res = await multicall.all([chefCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const rewardTokens = res[0].map(v => v.rewards['1']);
  const rewardDecimals = res[0].map(v => v.rewards['2']);
  const rewardsPerSec = res[0].map(v => v.rewards['3']);
  return { balances, rewardTokens, rewardDecimals, rewardsPerSec };
};
