import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_SERVICES_URL}/graphql`,
  credentials: "include",
});
