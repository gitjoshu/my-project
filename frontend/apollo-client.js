import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://172.19.164.149:4445/graphql",
  cache: new InMemoryCache(),
});

export default client;
