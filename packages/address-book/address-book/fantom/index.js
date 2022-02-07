import { beefyfinance } from './platforms/beefyfinance';
import { spookyswap } from './platforms/spookyswap';
import { spiritswap } from './platforms/spiritswap';
import { sushiFtm } from './platforms/sushiFtm';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';

const _fantom = {
  platforms: {
    beefyfinance,
    spookyswap,
    spiritswap,
    sushiFtm,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
export const fantom: ConstInterface<typeof _fantom, Chain> = _fantom;
