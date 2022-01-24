"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transformTokenListToObject = function (tokenList, chainIdFilter) {
  var map = {};
  tokenList.tokens.forEach(function (token) {
    if ((chainIdFilter && token.chainId === chainIdFilter) || !chainIdFilter) {
      var symbol = token.symbol;
      if (symbol in map) {
        var address = map[symbol].address;
        if (address.toLowerCase() !== token.address.toLowerCase()) {
          // same symbol, but different address.
          map[token.symbol + "-" + token.name] = token;
        }
      } else {
        map[symbol] = token;
      }
    }
  });
  return map;
};
exports.default = transformTokenListToObject;
