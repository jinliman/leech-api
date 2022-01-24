"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressBookByChainId = exports.addressBook = void 0;
var polygon_1 = require("./polygon");
var bsc_1 = require("./bsc");
var avax_1 = require("./avax");
var fantom_1 = require("./fantom");
var heco_1 = require("./heco");
var one_1 = require("./one");
var arbitrum_1 = require("./arbitrum");
var celo_1 = require("./celo");
var moonriver_1 = require("./moonriver");
var cronos_1 = require("./cronos");
var aurora_1 = require("./aurora");
var fuse_1 = require("./fuse");
var metis_1 = require("./metis");
var chainid_1 = require("../types/chainid");
__exportStar(require("../types/chainid"), exports);
var _addressBook = {
  polygon: polygon_1.polygon,
  bsc: bsc_1.bsc,
  avax: avax_1.avax,
  fantom: fantom_1.fantom,
  heco: heco_1.heco,
  one: one_1.one,
  arbitrum: arbitrum_1.arbitrum,
  celo: celo_1.celo,
  moonriver: moonriver_1.moonriver,
  cronos: cronos_1.cronos,
  aurora: aurora_1.aurora,
  fuse: fuse_1.fuse,
  metis: metis_1.metis,
};
var _addressBookByChainId = (_a = {},
  _a[chainid_1.ChainId.polygon] = polygon_1.polygon,
  _a[chainid_1.ChainId.bsc] = bsc_1.bsc,
  _a[chainid_1.ChainId.avax] = avax_1.avax,
  _a[chainid_1.ChainId.fantom] = fantom_1.fantom,
  _a[chainid_1.ChainId.heco] = heco_1.heco,
  _a[chainid_1.ChainId.one] = one_1.one,
  _a[chainid_1.ChainId.arbitrum] = arbitrum_1.arbitrum,
  _a[chainid_1.ChainId.celo] = celo_1.celo,
  _a[chainid_1.ChainId.moonriver] = moonriver_1.moonriver,
  _a[chainid_1.ChainId.cronos] = cronos_1.cronos,
  _a[chainid_1.ChainId.aurora] = aurora_1.aurora,
  _a[chainid_1.ChainId.fuse] = fuse_1.fuse,
  _a[chainid_1.ChainId.metis] = metis_1.metis,
  _a);
exports.addressBook = _addressBook;
exports.addressBookByChainId = _addressBookByChainId;
