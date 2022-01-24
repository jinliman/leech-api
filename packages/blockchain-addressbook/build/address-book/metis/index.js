"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metis = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var netswap_1 = require("./platforms/netswap");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _metis = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    netswap: netswap_1.netswap,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.metis = _metis;
