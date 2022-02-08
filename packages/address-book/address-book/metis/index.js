import { leechfinance } from './platforms/leechfinance';
import { netswap } from './platforms/netswap';
import { tethys } from './platforms/tethys';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _metis = {
  platforms: {
    leechfinance,
    netswap,
    tethys,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const metis = _metis;
