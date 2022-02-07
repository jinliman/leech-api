export function convertSymbolTokenMapToAddressTokenMap(
  symbolTokenMap
) {
  return Object.fromEntries(
    Object.values(symbolTokenMap).map(t => [t.address, t])
  );
}
