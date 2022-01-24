"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuse = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var fusefi_1 = require("./platforms/fusefi");
var fuseNetwork_1 = require("./platforms/fuseNetwork");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _fuse = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    fusefi: fusefi_1.fusefi,
    fuseNetwork: fuseNetwork_1.fuseNetwork,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.fuse = _fuse;
