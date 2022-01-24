"use strict";
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygon = void 0;
var leechfinance_1 = require("./platforms/leechfinance");
var cometh_1 = require("./platforms/cometh");
var dfyn_1 = require("./platforms/dfyn");
var polyzap_1 = require("./platforms/polyzap");
var quickswap_1 = require("./platforms/quickswap");
var sushi_1 = require("./platforms/sushi");
var wault_1 = require("./platforms/wault");
var polycat_1 = require("./platforms/polycat");
var iron_1 = require("./platforms/iron");
var polyyeld = __importStar(require("./platforms/polyyeld"));
var polypup = __importStar(require("./platforms/polypup"));
var apeswap_1 = require("./platforms/apeswap");
var brainswap_1 = require("./platforms/brainswap");
var mai_1 = __importDefault(require("./platforms/mai"));
var jetswap_1 = __importDefault(require("./platforms/jetswap"));
var farmhero_1 = require("./platforms/farmhero");
var polywise_1 = require("./platforms/polywise");
var polysage_1 = require("./platforms/polysage");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _polygon = {
  platforms: __assign(__assign(__assign({ leechfinance: leechfinance_1.leechfinance,
    cometh: cometh_1.cometh,
    dfyn: dfyn_1.dfyn,
    polyzap: polyzap_1.polyzap,
    quickswap: quickswap_1.quickswap,
    sushi: sushi_1.sushi,
    wault: wault_1.wault,
    polycat: polycat_1.polycat,
    iron: iron_1.iron }, polyyeld), polypup), { apeswap: apeswap_1.apeswap,
    brainswap: brainswap_1.brainswap,
    mai: mai_1.default,
    jetswap: jetswap_1.default,
    farmhero: farmhero_1.farmhero,
    polywise: polywise_1.polywise,
    polysage: polysage_1.polysage }),
  tokens: tokens_1.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.polygon = _polygon;
