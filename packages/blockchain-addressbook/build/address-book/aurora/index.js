"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aurora = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var trisolaris_1 = require("./platforms/trisolaris");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _aurora = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    trisolaris: trisolaris_1.trisolaris,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.aurora = _aurora;
