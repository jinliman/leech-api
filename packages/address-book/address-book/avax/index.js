const { leechfinance } = require('./platforms/leechfinance');
const { lydia } = require('./platforms/lydia');
const { pangolin } = require('./platforms/pangolin');
const { joe } = require('./platforms/joe');
const { synapse } = require('./platforms/synapse');
const { mai } = require('./platforms/mai');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _avax = {
  platforms: {
    leechfinance,
    lydia,
    pangolin,
    joe,
    synapse,
    mai,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  avax: _avax,
};
