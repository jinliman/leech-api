import { leechfinance } from './platforms/leechfinance';
import { mdex } from './platforms/mdex';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _heco = {
  platforms: {
    leechfinance,
    mdex,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
export const heco = _heco;
