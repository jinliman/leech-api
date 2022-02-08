const { leechfinance } = require('./platforms/leechfinance');
const { chainlink } = require('./platforms/chainlink');
const { cometh } = require('./platforms/cometh');
const { dfyn } = require('./platforms/dfyn');
const { polyzap } = require('./platforms/polyzap');
const { quickswap } = require('./platforms/quickswap');
const { sushi } = require('./platforms/sushi');
const { wault } = require('./platforms/wault');
const { polycat } = require('./platforms/polycat');
const { iron } = require('./platforms/iron');
const polyyeld = require('./platforms/polyyeld');
const polypup = require('./platforms/polypup');
const { apeswap } = require('./platforms/apeswap');
const { brainswap } = require('./platforms/brainswap');
const mai = require('./platforms/mai');
const jetswap = require('./platforms/jetswap');
const { farmhero } = require('./platforms/farmhero');
const { polywise } = require('./platforms/polywise');
const { polysage } = require('./platforms/polysage');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

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

module.exports = {
  polygon: _polygon,
};
