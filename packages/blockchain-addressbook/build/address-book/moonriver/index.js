"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moonriver = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var solarbeam_1 = require("./platforms/solarbeam");
var sushi_1 = require("./platforms/sushi");
var finn_1 = require("./platforms/finn");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _moonriver = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    solarbeam: solarbeam_1.solarbeam,
    sushi: sushi_1.sushi,
    finn: finn_1.finn,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.moonriver = _moonriver;
