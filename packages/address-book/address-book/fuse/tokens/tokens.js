const FUSE = {
  name: 'FUSE',
  address: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629',
  symbol: 'WFUSE',
  decimals: 18,
  chainId: 122,
  website: 'https://fuse.io/',
  description:
    'Launch community-centric payment systems and token economies on an Ethereum-compatible blockchain.',
  logoURI: 'https://explorer.fuse.io/images/fuse_logo-0346e93ebb763ba41076456a9f0bf943.svg?vsn=d',
};

const _tokens = {
  FUSE,
  WFUSE: FUSE,
  WNATIVE: FUSE,
  atUST: {
    name: 'UST Terra',
    symbol: 'atUST',
    address: '0x0D58a44be3dCA0aB449965dcc2c46932547Fea2f',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://www.terra.money/',
    description:
      'Terra is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.',
  },
  atLUNA: {
    name: 'Luna Terra',
    symbol: 'atUST',
    address: '0x588e24DEd8f850b14BB2e62E9c50A7Cd5Ee13Da9',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://www.terra.money/',
    description:
      'The Terra protocols native staking token that absorbs the price volatility of Terra. Luna is used for governance and in mining. Users stake Luna to validators who record and verify transactions on the blockchain in exchange for rewards from transaction fees. The more Terra is used, the more Luna is worth.',
  },
  WETH: {
    name: 'Wrapped Ether on Fuse',
    symbol: 'WETH',
    address: '0xa722c13135930332Eb3d749B2F0906559D2C5b99',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://weth.io/',
    description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  },
  WBTC: {
    name: 'Wrapped BTC on Fuse',
    symbol: 'WBTC',
    address: '0x33284f95ccb7B948d9D352e1439561CF83d8d00d',
    chainId: 122,
    decimals: 8,
    logoURI: '',
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
  },
  fUSD: {
    name: 'Fuse Dollar',
    symbol: 'fUSD',
    address: '0x249BE57637D8B013Ad64785404b24aeBaE9B098B',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://fuse.fi/',
    description:
      'Fuse Dollar (fUSD) is fully backed by USDC which is a fully backed us regulated stablecoin minted by circle.com and is widely used in the decentralized finance space. The Fuse network will add more stablecoins to aggregate yield, add stability and remove friction for on boarding and off boarding between crypto and fiat. ',
  },
  BNB: {
    name: 'BNB on Fuse',
    symbol: 'BNB',
    address: '0x6acb34b1Df86E254b544189Ec32Cf737e2482058',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://www.binance.com/',
    description:
      'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
  },
  BUSD: {
    name: 'Binance USD on Fuse',
    symbol: 'BUSD',
    address: '0x6a5F6A8121592BeCd6747a38d67451B310F7f156',
    chainId: 122,
    decimals: 18,
    logoURI: '',
    website: 'https://www.binance.com/en/busd',
    description:
      'Binance USD (BUSD) is a 1:1 USD-backed stable coin issued by Binance (in partnership with Paxos). BUSD is approved and regulated by the New York State Department of Financial Services (NYDFS). The BUSD Monthly Audit Report can be viewed from the official website.',
  },
  USDC: {
    name: 'USD Coin on Fuse',
    symbol: 'USDC',
    address: '0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5',
    chainId: 122,
    decimals: 6,
    logoURI: '',
    website: 'https://www.circle.com/usdc',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
  },
  G: {
    name: 'GoodDollar',
    symbol: 'G$',
    address: '0x495d133B938596C9984d462F007B676bDc57eCEC',
    chainId: 122,
    decimals: 2,
    logoURI: '',
    website: 'https://www.gooddollar.org/',
    description:
      'The GoodDollar protocol is a community-driven, distributed framework designed to generate, fund, and distribute global basic income via the GoodDollar token (hereafter “G$”). G$ is an ERC-20 digital asset built on the Ethereum blockchain that operates within the emerging ecosystem of decentralized and open finance. GoodDollar leverages new protocols and smart contracts across the ecosystem to deliver its basic income economy.',
  },
  SUSHI: {
    name: 'SushiToken on Fuse',
    symbol: 'SUSHI',
    address: '0x90708b20ccC1eb95a4FA7C8b18Fd2C22a0Ff9E78',
    chainId: 122,
    decimals: 18,
    logoURI:
      'https://pancakeswap.finance/images/tokens/0x90708b20ccC1eb95a4FA7C8b18Fd2C22a0Ff9E78.svg',
    website: 'https://sushi.com/',
    description:
      'Sushi is the home of DeFi. Their community is building a comprehensive, decentralized trading platform for the future of finance. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform.',
  },
  USDT: {
    name: 'Tether USD on Fuse',
    symbol: 'USDT',
    address: '0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10',
    chainId: 122,
    decimals: 6,
    logoURI: '',
    website: 'https://tether.to/',
    description:
      'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
  },
};

module.exports = {
  tokens: _tokens,
};
