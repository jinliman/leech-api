"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avax = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var lydia_1 = require("./platforms/lydia");
var pangolin_1 = require("./platforms/pangolin");
var joe_1 = require("./platforms/joe");
var synapse_1 = require("./platforms/synapse");
var mai_1 = require("./platforms/mai");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _avax = {
  platforms: {
    leechfinance: leechfinance_1.leechfinance,
    lydia: lydia_1.lydia,
    pangolin: pangolin_1.pangolin,
    joe: joe_1.joe,
    synapse: synapse_1.synapse,
    mai: mai_1.mai,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.avax = _avax;
