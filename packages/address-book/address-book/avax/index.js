import { leechfinance } from './platforms/leechfinance';
import { lydia } from './platforms/lydia';
import { pangolin } from './platforms/pangolin';
import { joe } from './platforms/joe';
import { synapse } from './platforms/synapse';
import { mai } from './platforms/mai';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _avax = {
  platforms: {
    leechfinance,
    lydia,
    pangolin,
    joe,
    synapse,
    mai,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
export const avax = _avax;
