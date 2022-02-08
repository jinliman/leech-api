const { leechfinance } = require('./platforms/leechfinance');
const { sushi } = require('./platforms/sushi');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _arbitrum = {
  platforms: {
    leechfinance,
    sushi,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  arbitrum: _arbitrum,
};
