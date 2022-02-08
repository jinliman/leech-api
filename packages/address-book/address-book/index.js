const { polygon } = require('./polygon');
const { bsc } = require('./bsc');
const { avax } = require('./avax');
const { fantom } = require('./fantom');
const { heco } = require('./heco');
const { one } = require('./one');
const { arbitrum } = require('./arbitrum');
const { celo } = require('./celo');
const { moonriver } = require('./moonriver');
const { cronos } = require('./cronos');
const { aurora } = require('./aurora');
const { fuse } = require('./fuse');
const { metis } = require('./metis');
const { ChainId } = require('../types/chainid');

const _addressBook = {
  polygon: ChainId.polygon,
  bsc: ChainId.bsc,
  avax: ChainId.avax,
  fantom: ChainId.fantom,
  heco: ChainId.heco,
  one: ChainId.one,
  arbitrum: ChainId.arbitrum,
  celo: ChainId.celo,
  moonriver: ChainId.moonriver,
  cronos: ChainId.cronos,
  aurora: ChainId.aurora,
  fuse: ChainId.fuse,
  metis: ChainId.metis,
};

const _addressBookByChainId = {
  [ChainId.polygon]: polygon,
  [ChainId.bsc]: bsc,
  [ChainId.avax]: avax,
  [ChainId.fantom]: fantom,
  [ChainId.heco]: heco,
  [ChainId.one]: one,
  [ChainId.arbitrum]: arbitrum,
  [ChainId.celo]: celo,
  [ChainId.moonriver]: moonriver,
  [ChainId.cronos]: cronos,
  [ChainId.aurora]: aurora,
  [ChainId.fuse]: fuse,
  [ChainId.metis]: metis,
};

module.exports = {
  addressBook: _addressBook,
  addressBookByChainId: _addressBookByChainId,
  ChainId,
};
