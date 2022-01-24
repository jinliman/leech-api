"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heco = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var mdex_1 = require("./platforms/mdex");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _heco = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    mdex: mdex_1.mdex,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.heco = _heco;
