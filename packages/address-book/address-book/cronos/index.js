const { leechfinance } = require('./platforms/leechfinance');
const { vvs } = require('./platforms/vvs');
const { crona } = require('./platforms/crona');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _cronos = {
  platforms: {
    leechfinance,
    vvs,
    crona,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  cronos: _cronos,
};
