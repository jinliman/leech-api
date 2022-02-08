import { leechfinance } from './platforms/leechfinance';
import { trisolaris } from './platforms/trisolaris';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _aurora = {
  platforms: {
    leechfinance,
    trisolaris,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const aurora = _aurora;
