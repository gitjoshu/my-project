import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",
  cache: new InMemoryCache(),
});

export default client;
