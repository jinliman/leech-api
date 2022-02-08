import { leechfinance } from './platforms/leechfinance';
import { solarbeam } from './platforms/solarbeam';
import { sushi } from './platforms/sushi';
import { finn } from './platforms/finn';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _moonriver = {
  platforms: {
    leechfinance,
    solarbeam,
    sushi,
    finn,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const moonriver = _moonriver;
