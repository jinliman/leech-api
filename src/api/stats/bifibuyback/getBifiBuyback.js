import { BlockApiResponse, ERC20TxApiResponse } from './etherscanApiResponseTypes';

import BigNumber from 'bignumber.js';
import fetch from 'node-fetch';
import { addressBook } from '../../../../packages/address-book/address-book';

import fetchPrice from '../../../utils/fetchPrice';
import { getUtcSecondsFromDayRange } from '../../../utils/getUtcSecondsFromDayRange';
import { getEDecimals } from '../../../utils/getEDecimals';
import { etherscanApiUrlMap } from './etherscanApiUrlMap';
import { bifiLpMap } from './bifiLpMap';

const INIT_DELAY = 40 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

const getOneDayBlocksFromEtherscan = async (scanUrl, apiToken) => {
  const [start, end] = getUtcSecondsFromDayRange(0, 1);
  const startBlock = await getBlockFromEtherscan(scanUrl, start, apiToken);
  const endBlock = await getBlockFromEtherscan(scanUrl, end, apiToken);
  return [startBlock, endBlock];
};

const getBlockFromEtherscan = async (scanUrl, timestamp, apiToken) => {
  const token = apiToken ? apiToken : 'YourApiKeyToken';
  const url = `${scanUrl}/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=after&apikey=${token}`;
  const resp = await fetch(url);
  const json = await resp.json();
  return json.result;
};

const getBuyback = async (
  chainName,
  scanUrl,
  apiToken,
  BIFI, // TODO type this with brknrobot's address book types, once merged
  bifiMaxiAddress,
  bifiLpAddress
) => {
  let bifiBuybackTokenAmount = new BigNumber(0);
  const [startBlock, endBlock] = await getOneDayBlocksFromEtherscan(scanUrl, apiToken);
  const url = `${scanUrl}/api?module=account&action=tokentx&address=${bifiMaxiAddress}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiToken}`;
  const resp = await fetch(url);
  const json = await resp.json();
  let txCount = 0;
  for (const entry of json.result) {
    // actually should use the lp pool data here instead of address-book. Will change after converging address-book and api
    if (entry.from === bifiLpAddress.toLowerCase()) {
      const tokenAmount = new BigNumber(entry.value).dividedBy(getEDecimals(BIFI.decimals));
      bifiBuybackTokenAmount = bifiBuybackTokenAmount.plus(tokenAmount);
      txCount += 1;
    }
  }
  return { [chainName]: bifiBuybackTokenAmount };
};

let dailyBifiBuybackStats = undefined;

const updateBifiBuyback = async () => {
  try {
    let promises = [];

    const chainNames = Object.keys(etherscanApiUrlMap);

    chainNames.forEach(chainName => {
      const { url, apiToken } = etherscanApiUrlMap[chainName];
      const lp = bifiLpMap[chainName];
      const chainAddressBook = addressBook[chainName];
      const chainBIFI = chainAddressBook.tokens.BIFI;
      const chainBifiMaxi = chainAddressBook.platforms.beefyfinance.bifiMaxiStrategy;
      const prom = getBuyback(chainName, url, apiToken, chainBIFI, chainBifiMaxi, lp);
      promises.push(prom);
    });

    const bifiPrice = await fetchPrice({ oracle: 'tokens', id: 'BIFI' });

    const results = await Promise.allSettled(promises);
    let dailyBifiBuybackAmountByChain = {};
    for (const result of results) {
      if (result.status !== 'fulfilled') {
        continue;
      }
      dailyBifiBuybackAmountByChain = { ...dailyBifiBuybackAmountByChain, ...result.value };
    }

    for (const key in dailyBifiBuybackAmountByChain) {
      const buybackTokenAmount = dailyBifiBuybackAmountByChain[key];
      const buybackUsdAmount = buybackTokenAmount.times(new BigNumber(bifiPrice));
      dailyBifiBuybackStats = {
        ...dailyBifiBuybackStats,
        [key]: {
          buybackTokenAmount,
          buybackUsdAmount,
        },
      };
    }
  } catch (err) {}

  setTimeout(updateBifiBuyback, REFRESH_INTERVAL);
};

setTimeout(updateBifiBuyback, INIT_DELAY);

export const getBifiBuyback = () => {
  return dailyBifiBuybackStats;
};
