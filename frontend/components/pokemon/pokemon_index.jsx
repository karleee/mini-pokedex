import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonHome from './pokemon_home';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    return (
      <div className="pokedex all-screens-container">
        <Route exact path="/" component={PokemonHome} />
        {/* <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} /> */}
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul> 
      </div>
    )
  }
}

export default PokemonIndex;