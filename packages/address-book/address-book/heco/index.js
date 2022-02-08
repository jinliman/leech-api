const { leechfinance } = require('./platforms/leechfinance');
const { mdex } = require('./platforms/mdex');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _heco = {
  platforms: {
    leechfinance,
    mdex,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  heco: _heco,
};
