const { leechfinance } = require('./platforms/leechfinance');
const { fusefi } = require('./platforms/fusefi');
const { fuseNetwork } = require('./platforms/fuseNetwork');
const { sushiFuse } = require('./platforms/sushiFuse');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

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

module.exports = {
  fuse: _fuse,
};
