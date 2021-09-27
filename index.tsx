import { ApolloProvider } from "@apollo/client";
import { Navigation } from "react-native-navigation";
import { withNavigationProvider } from "react-native-navigation-hooks/dist";
import React from 'react';
import initClient, { client } from './src/core';

import FilmsScreen from "./src/screens/FilmsScreen";

enum screens {
  films = 'Films',
}
export function registerComponent<P>(
  name: string,
  Comp: React.ComponentType<P>,
): void {
  Navigation.registerComponent(
    name,
    () =>
      withNavigationProvider((props) => (
          <ApolloProvider client={client}>
            <Comp {...props} />
          </ApolloProvider>
      )),
    () => Comp,
  );
}

registerComponent(screens.films, FilmsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  await initClient();
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: screens.films,
             },
           },
         ],
       },
     },
  });
});
