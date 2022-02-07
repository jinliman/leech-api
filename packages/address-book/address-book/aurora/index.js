import { beefyfinance } from './platforms/beefyfinance';
import { trisolaris } from './platforms/trisolaris';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _aurora = {
  platforms: {
    beefyfinance,
    trisolaris,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const aurora = _aurora;
