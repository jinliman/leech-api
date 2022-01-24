"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsc = void 0;
var ape_1 = require("./platforms/ape");
var bakery_1 = require("./platforms/bakery");
var leechfinance_1 = require("./platforms/leechfinance");
var pancake_1 = require("./platforms/pancake");
var ironfinance_1 = require("./platforms/ironfinance");
var farmhero_1 = require("./platforms/farmhero");
var ellipsis_1 = require("./platforms/ellipsis");
var elk_1 = require("./platforms/elk");
var wault_1 = require("./platforms/wault");
var kebab_1 = require("./platforms/kebab");
var jet_1 = require("./platforms/jet");
var mdex_1 = require("./platforms/mdex");
var biswap_1 = require("./platforms/biswap");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _bsc = {
  platforms: {
    ape: ape_1.ape,
    bakery: bakery_1.bakery,
    leechfinance: leechfinance_1.leechfinance,
    pancake: pancake_1.pancake,
    ironfinance: ironfinance_1.ironfinance,
    farmhero: farmhero_1.farmhero,
    ellipsis: ellipsis_1.ellipsis,
    elk: elk_1.elk,
    wault: wault_1.wault,
    kebab: kebab_1.kebab,
    jet: jet_1.jet,
    mdex: mdex_1.mdex,
    biswap: biswap_1.biswap,
  },
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.bsc = _bsc;
