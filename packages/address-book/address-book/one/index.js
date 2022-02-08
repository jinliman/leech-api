const { leechfinance } = require('./platforms/leechfinance');
const { sushi } = require('./platforms/sushi');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _one = {
  platforms: {
    leechfinance,
    sushi,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  one: _one,
};
