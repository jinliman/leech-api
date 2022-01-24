"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celo = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var sushiCelo_1 = require("./platforms/sushiCelo");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _celo = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    sushiCelo: sushiCelo_1.sushiCelo,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.celo = _celo;
