const { leechfinance } = require('./platforms/leechfinance');
const { spookyswap } = require('./platforms/spookyswap');
const { spiritswap } = require('./platforms/spiritswap');
const { sushiFtm } = require('./platforms/sushiFtm');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

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

module.exports = {
  fantom: _fantom,
};
