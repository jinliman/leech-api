"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitrum = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var sushi_1 = require("./platforms/sushi");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _arbitrum = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    sushi: sushi_1.sushi,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.arbitrum = _arbitrum;
