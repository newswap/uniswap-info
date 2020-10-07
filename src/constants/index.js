// dev:0x7F053946C99f6a17084e5aE1fd76587d43C4bb54   test/main:0x723913136a42684B5e3657e3cD2f67ee3e83A82D
export const FACTORY_ADDRESS = '0x723913136a42684B5e3657e3cD2f67ee3e83A82D'

// dev:0x2678fb6e5af58f7b520ace2cd3a4f476b771c6f2   test/main:0xf4905b9bc02ce21c98eac1803693a9357d5253bf
export const WNEW_ADDRESS = '0xf4905b9bc02ce21c98eac1803693a9357d5253bf' //小写

// test:1007  mainnet:1012
export const CHAIN_ID = 1007

// testnet: https://explorer.testnet.newtonproject.org     main:https://explorer.newtonproject.org
export const EXPLORER_URL = 'https://explorer.testnet.newtonproject.org'

// testnet: https://app.testnet.newswap.org     mainnet:https://app.newswap.org
export const EXCHANGE_URL = 'https://app.testnet.newswap.org'

// testnet: https://testnet.newswap.org   mainnet: https://newswap.org
export const NEWSWAP_URL = "https://testnet.newswap.org"

export const LOGO_URL = "https://misc.newswap.org/tokenlist/assets/" + CHAIN_ID

// main: 0x0c0c1cfb948a75595b7d70703bf50190e62a2286 usdt为token0    test: 0x56ae975581a382193ff36579c81281e179486c43 usdt为token0   dev:0x279677d9d2f4194428c9a39262129d870b5c5185 usdt为token1   
export const NUSD_NEW_PAIR = '0x56ae975581a382193ff36579c81281e179486c43'

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
  'https://misc.newswap.org/tokenlist/newswap_defi_100.json'
  // 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  // 'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0xeb433647c66ec2c0c009b6941c204e30bb7e49c0',
  '0x93a04d0c6e4947ea1ee3849d0e16cb39128c259f',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0x1000000000000000000000000000000000000000',
  '0x2000000000000000000000000000000000000000',
  '0x2c1b73463c3047bf0bf35898d5a976e5fcda1875',
  '0x758b95376c737e554ca07ebefde44f5c661b89b8',
  '0x960793fdb034b54193e47d488365561337b1a1d3',
  '0xb4e08bdf2988790d79f6fbfb773d4315ae56e340',
  '0x5e8aac72d2a54c5e734c5c282e468a36d79e7c45',
  '0x9271a1607f1ba07bdd9b020d3e218938d244dde2',
  '0x23d8f7857a8295ee337ea6da04de4daaac4e8f6c',
  '0x233a3855832755836d65727e0efc9a090167c9cc',
  '0x4c7f7905625efc7fd47d5556db80e79a94e8da02',
  '0x8b33a246f84780ed7825a326e21acaa17ddd8602',
  '0xaced81aa4208333df1051f9ff99e5f067577ea99',
  '0xc5abf7f145094a9640c67436fe854b8bc399b34d',
  '0xdc1043b3e6a65125576926f57acf8c5bdf6c1663',
  '0xf2272db3daa5bee1c7ed953c80f43939053de4d6',
  '0x437c8c30da026a4c5c9825fdca8e0acf94e5ccad',
  '0xb4311ffe4be83d2e7b0905e5d637bfa323547f24',
  '0x3ba05fa3304f68070892490f994abda88ad6a2c6',
  '0xe5ce187fdc7b7eee513998ee25e8496b2b57ba05',
  '0x2cd062ff9997e3f7697baf7028f42fe69deeaef9'
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
