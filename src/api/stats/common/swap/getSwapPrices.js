const BigNumber = require('bignumber.js');
const { Swap_ABI } = require('../../../../abis/common/Swap');

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

module.exports = { getSwapPrices };
