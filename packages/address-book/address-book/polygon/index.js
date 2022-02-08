import { leechfinance } from './platforms/leechfinance';
import { chainlink } from './platforms/chainlink';
import { cometh } from './platforms/cometh';
import { dfyn } from './platforms/dfyn';
import { polyzap } from './platforms/polyzap';
import { quickswap } from './platforms/quickswap';
import { sushi } from './platforms/sushi';
import { wault } from './platforms/wault';
import { polycat } from './platforms/polycat';
import { iron } from './platforms/iron';
import * as polyyeld from './platforms/polyyeld';
import * as polypup from './platforms/polypup';
import { apeswap } from './platforms/apeswap';
import { brainswap } from './platforms/brainswap';
import mai from './platforms/mai';
import jetswap from './platforms/jetswap';
import { farmhero } from './platforms/farmhero';
import { polywise } from './platforms/polywise';
import { polysage } from './platforms/polysage';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';

const _polygon = {
  platforms: {
    leechfinance,
    chainlink,
    cometh,
    dfyn,
    polyzap,
    quickswap,
    sushi,
    wault,
    polycat,
    iron,
    ...polyyeld,
    ...polypup,
    apeswap,
    brainswap,
    mai,
    jetswap,
    farmhero,
    polywise,
    polysage,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const polygon = _polygon;
