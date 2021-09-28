import {InMemoryCache, NormalizedCacheObject} from '@apollo/client/core';
import CONFIG from './config';
import {HttpLink, ApolloClient, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {AsyncStorageWrapper, CachePersistor} from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export let client: ApolloClient<NormalizedCacheObject>;
export let persistor: CachePersistor<NormalizedCacheObject>;
export let cache: InMemoryCache;

export default async (): Promise<void> => {
  cache = new InMemoryCache({});

  persistor = new CachePersistor({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
  });

  await persistor.restore();

  const httpLink = new HttpLink({
    uri: CONFIG.HOSTNAME,
  });

  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({message, locations, path}) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const apolloClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache,
  });

  client = apolloClient;
};
