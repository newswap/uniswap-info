import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

//https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2
// devnet:http://47.240.113.82:8000/subgraphs/name/liuyong123/newswap
// testnet: http://graphapi.testnet.cloud.diynova.com/subgraphs/name/liuyong123/newswap
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://graphapi.testnet.cloud.diynova.com/subgraphs/name/liuyong123/newswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://graphapi.testnet.cloud.diynova.com/subgraphs/name/liuyong123/newswap'
  }),
  cache: new InMemoryCache()
})
