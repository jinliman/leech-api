import { leechfinance } from './platforms/leechfinance';
import { sushiCelo } from './platforms/sushiCelo';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _celo = {
  platforms: {
    leechfinance,
    sushiCelo,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const celo = _celo;
