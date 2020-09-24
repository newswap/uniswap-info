// dev:0x7F053946C99f6a17084e5aE1fd76587d43C4bb54   test/main:0x723913136a42684B5e3657e3cD2f67ee3e83A82D
export const FACTORY_ADDRESS = '0x723913136a42684B5e3657e3cD2f67ee3e83A82D'

// dev:0x2678fb6e5af58f7b520ace2cd3a4f476b771c6f2   test/main:0xf4905b9bc02ce21c98eac1803693a9357d5253bf
export const WNEW_ADDRESS = '0xf4905b9bc02ce21c98eac1803693a9357d5253bf' //小写

// test:1007  mainnet:1012
export const CHAIN_ID = 1007

// testnet: https://explorer.testnet.newtonproject.org     devnet:http://explorer.newtonproject.dev.diynova.com
export const EXPLORER_URL = 'https://explorer.testnet.newtonproject.org'

// testnet: https://app.testnet.newswap.org     mainnet:https://app.newswap.org
export const EXCHANGE_URL = 'https://app.testnet.newswap.org'

// testnet: https://testnet.newswap.org   mainnet: https://newswap.org
export const NEWSWAP_URL = "https://testnet.newswap.org"

// test/main: 0x4fc7ccbee843633f9fd8f047c4d7b1b3579600f4 usdt为token0   dev:0x279677d9d2f4194428c9a39262129d870b5c5185 usdt为token1   
export const NUSD_NEW_PAIR = '0x4fc7ccbee843633f9fd8f047c4d7b1b3579600f4'

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
  '0xeb433647c66ec2c0c009b6941c204e30bb7e49c0',
  '0x93a04d0c6e4947ea1ee3849d0e16cb39128c259f',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0x1000000000000000000000000000000000000000',
  '0x2000000000000000000000000000000000000000'
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
