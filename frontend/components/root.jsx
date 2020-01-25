import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;