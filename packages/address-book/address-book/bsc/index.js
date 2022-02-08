const { ape } = require('./platforms/ape');
const { chainlink } = require('./platforms/chainlink');
const { bakery } = require('./platforms/bakery');
const { leechfinance } = require('./platforms/leechfinance');
const { pancake } = require('./platforms/pancake');
const { ironfinance } = require('./platforms/ironfinance');
const { farmhero } = require('./platforms/farmhero');
const { ellipsis } = require('./platforms/ellipsis');
const { elk } = require('./platforms/elk');
const { wault } = require('./platforms/wault');
const { kebab } = require('./platforms/kebab');
const { jet } = require('./platforms/jet');
const { mdex } = require('./platforms/mdex');
const { biswap } = require('./platforms/biswap');
const { tokens } = require('./tokens/tokens');
const { convertSymbolTokenMapToAddressTokenMap } = require('../../util/convertSymbolTokenMapToAddressTokenMap');

const _bsc = {
  platforms: {
    ape,
    chainlink,
    bakery,
    leechfinance,
    pancake,
    ironfinance,
    farmhero,
    ellipsis,
    elk,
    wault,
    kebab,
    jet,
    mdex,
    biswap,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

module.exports = {
  bsc: _bsc,
};
