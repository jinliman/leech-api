const { leechfinance } = require('./platforms/leechfinance');
const { trisolaris } = require('./platforms/trisolaris');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _aurora = {
  platforms: {
    leechfinance,
    trisolaris,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  aurora: _aurora,
};
