import BigNumber from 'bignumber.js';

import { Swap_ABI } from '../../../../abis/common/Swap';

// gets the prices of LPToken contracts deployed from Swap contracts.
// Example is IronSwap (0x837503e8A8753ae17fB8C8151B8e6f586defCb57) on polygon

const getSwapPrices = async ({
  web3,
  pools,
}) => {
  // create closure of _getPrice with web3 to avoid passing in web3 every time
  const getPrice = (pool) => {
    return _getPrice(web3, pool);
  };

  const swapPools = pools.filter(pool => pool.swap !== undefined);

  const promises = [];
  swapPools.forEach(pool => promises.push(getPrice(pool)));
  const values = await Promise.all(promises);

  const prices = {};

  values.forEach(poolTokenPrice => {
    const [name, price] = poolTokenPrice;
    prices[name] = price;
  });

  return prices;
};

const _getPrice = async (web3, pool) => {
  const Swap = new web3.eth.Contract(Swap_ABI, pool.swap);
  const virtualPrice = new BigNumber(await Swap.methods.getVirtualPrice().call());
  const tokenPrice = virtualPrice.dividedBy(pool.decimals).toNumber();

  return [pool.name, tokenPrice];
};

export { getSwapPrices };
