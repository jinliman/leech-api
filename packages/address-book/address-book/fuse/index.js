import { leechfinance } from './platforms/leechfinance';
import { fusefi } from './platforms/fusefi';
import { fuseNetwork } from './platforms/fuseNetwork';
import { sushiFuse } from './platforms/sushiFuse';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _fuse = {
  platforms: {
    leechfinance,
    fusefi,
    fuseNetwork,
    sushiFuse,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const fuse = _fuse;
