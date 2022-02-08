const { leechfinance } = require('./platforms/leechfinance');
const { solarbeam } = require('./platforms/solarbeam');
const { sushi } = require('./platforms/sushi');
const { finn } = require('./platforms/finn');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _moonriver = {
  platforms: {
    leechfinance,
    solarbeam,
    sushi,
    finn,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  moonriver: _moonriver,
};
