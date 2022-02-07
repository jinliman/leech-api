import { beefyfinance } from './platforms/beefyfinance';
import { sushi } from './platforms/sushi';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _arbitrum = {
  platforms: {
    beefyfinance,
    sushi,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const arbitrum = _arbitrum;
