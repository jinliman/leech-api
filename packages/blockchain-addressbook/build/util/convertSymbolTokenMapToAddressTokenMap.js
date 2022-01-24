"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSymbolTokenMapToAddressTokenMap = void 0;
function convertSymbolTokenMapToAddressTokenMap(symbolTokenMap) {
  return Object.fromEntries(Object.values(symbolTokenMap).map(function (t) { return [t.address, t]; }));
}
exports.convertSymbolTokenMapToAddressTokenMap = convertSymbolTokenMapToAddressTokenMap;
