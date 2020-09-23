// dev:0x7F053946C99f6a17084e5aE1fd76587d43C4bb54   test:0xCe59bbCFe029789af935DFF388Fb65771e2845B2
export const FACTORY_ADDRESS = '0xCe59bbCFe029789af935DFF388Fb65771e2845B2'

// dev:0x2678fb6e5af58f7b520ace2cd3a4f476b771c6f2   test:0x55d1cf675d4618b7ba371faa3ff4f559d0f5c6d9
export const WNEW_ADDRESS = '0x55d1cf675d4618b7ba371faa3ff4f559d0f5c6d9' //小写

// test:1007  mainnet:1012
export const CHAIN_ID = 1007

// testnet: https://explorer.testnet.newtonproject.org     devnet:http://explorer.newtonproject.dev.diynova.com
export const EXPLORER_URL = 'https://explorer.testnet.newtonproject.org'

// testnet: https://app.testnet.newswap.org     mainnet:https://app.newswap.org
export const EXCHANGE_URL = 'https://app.testnet.newswap.org'

// testnet: https://testnet.newswap.org   mainnet: https://newswap.org
export const NEWSWAP_URL = "https://testnet.newswap.org"

// dev:0x279677d9d2f4194428c9a39262129d870b5c5185 usdt为token1   test: 0xea9761627eca1efb35c5e6b525f1e8a6f477a047 usdt为token0  
export const NUSD_NEW_PAIR = '0xea9761627eca1efb35c5e6b525f1e8a6f477a047'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1W',
  MONTH: '1M',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'all'
}

// test: https://release.cloud.diynova.com/sth/newswap/tokenlist.json
// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://release.cloud.diynova.com/sth/newswap/tokenlist.json'
  // 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  // 'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1'
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
