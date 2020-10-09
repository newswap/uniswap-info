import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

//https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2
const CLIENT_URL = process.env.REACT_APP_SUBGRAPHS_URL

export const client = new ApolloClient({
  link: new HttpLink({
    uri: CLIENT_URL
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

// https://api.thegraph.com/index-node/graphql
export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: CLIENT_URL
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
    uri: CLIENT_URL
  }),
  cache: new InMemoryCache()
})
