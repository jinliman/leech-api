"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronos = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var vvs_1 = require("./platforms/vvs");
var crona_1 = require("./platforms/crona");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _cronos = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    vvs: vvs_1.vvs,
    crona: crona_1.crona,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.cronos = _cronos;
