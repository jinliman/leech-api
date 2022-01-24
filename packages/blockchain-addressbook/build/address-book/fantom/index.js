"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fantom = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var spookyswap_1 = require("./platforms/spookyswap");
var spiritswap_1 = require("./platforms/spiritswap");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _fantom = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    spookyswap: spookyswap_1.spookyswap,
    spiritswap: spiritswap_1.spiritswap,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.fantom = _fantom;
