import { leechfinance } from './platforms/leechfinance';
import { spookyswap } from './platforms/spookyswap';
import { spiritswap } from './platforms/spiritswap';
import { sushiFtm } from './platforms/sushiFtm';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _fantom = {
  platforms: {
    leechfinance,
    spookyswap,
    spiritswap,
    sushiFtm,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
export const fantom = _fantom;
