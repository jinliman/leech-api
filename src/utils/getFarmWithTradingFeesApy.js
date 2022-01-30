import { compound } from './compound';

export const getFarmWithTradingFeesApy = (
  farmApr,
  tradingApr,
  compoundingsPerYear,
  t,
  shareAfterLeechPerformanceFee
) => {
  const farmApy = farmApr
    ? compound(farmApr, compoundingsPerYear, t, shareAfterLeechPerformanceFee)
    : 0;
  const finalAPY = (1 + farmApy) * (1 + Number(tradingApr || 0)) - 1;
  return finalAPY;
};
