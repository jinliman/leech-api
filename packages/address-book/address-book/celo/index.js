const { leechfinance } = require('./platforms/leechfinance');
const { sushiCelo } = require('./platforms/sushiCelo');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _celo = {
  platforms: {
    leechfinance,
    sushiCelo,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  celo: _celo,  
};
