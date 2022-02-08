import { leechfinance } from './platforms/leechfinance';
import { vvs } from './platforms/vvs';
import { crona } from './platforms/crona';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _cronos = {
  platforms: {
    leechfinance,
    vvs,
    crona,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const cronos = _cronos;
