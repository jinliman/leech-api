const transformTokenListToObject = (
  tokenList,
  chainIdFilter
) => {
  const map = {};
  tokenList.tokens.forEach(token => {
    if ((chainIdFilter && token.chainId === chainIdFilter) || !chainIdFilter) {
      const { symbol } = token;
      if (symbol in map) {
        const { address } = map[symbol];
        if (address.toLowerCase() !== token.address.toLowerCase()) {
          // same symbol, but different address.
          map[`${token.symbol}-${token.name}`] = token;
        }
      } else {
        map[symbol] = token;
      }
    }
  });
  return map;
};

module.exports = transformTokenListToObject;
