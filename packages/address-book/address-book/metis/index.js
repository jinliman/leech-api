const { leechfinance } = require('./platforms/leechfinance');
const { netswap } = require('./platforms/netswap');
const { tethys } = require('./platforms/tethys');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _metis = {
  platforms: {
    leechfinance,
    netswap,
    tethys,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  metis: _metis,
};
