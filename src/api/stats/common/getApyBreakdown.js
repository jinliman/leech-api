import { getFarmWithTradingFeesApy } from '../../../utils/getFarmWithTradingFeesApy';
import { compound } from '../../../utils/compound';
import { BASE_HPY, LEECH_PERFORMANCE_FEE, SHARE_AFTER_PERFORMANCE_FEE } from '../../../constants';

export const getApyBreakdown = (
  pools,
  tradingAprs,
  farmAprs,
  providerFee,
  performanceFee = LEECH_PERFORMANCE_FEE
) => {
  const result = {
    apys: {},
    apyBreakdowns: {},
  };

  pools.forEach((pool, i) => {
    const simpleApr = farmAprs[i]?.toNumber();
    const vaultApr = simpleApr * SHARE_AFTER_PERFORMANCE_FEE;
    const vaultApy = compound(simpleApr, BASE_HPY, 1, SHARE_AFTER_PERFORMANCE_FEE);
    const tradingApr = tradingAprs[pool.address.toLowerCase()]?.toNumber();
    const totalApy = getFarmWithTradingFeesApy(
      simpleApr,
      tradingApr,
      BASE_HPY,
      1,
      SHARE_AFTER_PERFORMANCE_FEE
    );

    // Add token to APYs object
    result.apys[pool.name] = totalApy;
    result.apyBreakdowns[pool.name] = {
      vaultApr: vaultApr,
      compoundingsPerYear: BASE_HPY,
      leechPerformanceFee: performanceFee,
      vaultApy: vaultApy,
      lpFee: providerFee,
      tradingApr: tradingApr,
      totalApy: totalApy,
    };
  });

  return result;
};

export default getApyBreakdown;
