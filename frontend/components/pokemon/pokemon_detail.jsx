import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);  
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const {pokemon} = this.props;
    if (!pokemon) return null;
    const pokemonMoves = pokemon.moves ? pokemon.moves : [];
    const movesList = pokemonMoves.map(move => <li key={move}>{move}</li>);
    return (
      <div className="pokemon-detail screens-container"> 
        <div className="pokemon-detail image-screens">
          <div className="pokemon-detail poke-image-display">
            <div className="pokemon-detail screw-wrapper">
              <div className="pokemon-detail screw-button"></div>
              <div className="pokemon-detail screw-button"></div>
            </div>

            <div className="pokemon-detail glass-screen-display">
              <img src={pokemon.main_image_url} alt={pokemon.name} />
              <div className="pokemon-detail glass-streak-1"></div>
              <div className="pokemon-detail glass-streak-2"></div>
              <div className="pokemon-detail glass-streak-3"></div>
            </div>

            <div className="pokemon-detail glass-buttons-wrapper">
              <div className="pokemon-detail red-button-wrapper"><div className="button-inner"></div></div>

              <div className="pokemon-detail vent-lines-wrapper">
                <div className="pokemon-detail vent-line"></div>
                <div className="pokemon-detail vent-line"></div>
                <div className="pokemon-detail vent-line"></div>
              </div>
            </div>
          </div>

          <div className="pokemon-detail mock-display">
            <div className="mock-line-1"></div>
            <div className="mock-line-2"></div>
            <div className="mock-line-3"></div>
            <div className="mock-line-4"></div>
          </div>
        </div>

        <div className="pokemon-detail info-container">
          <ul className="pokemon-detail stats-container">
            <li><h1>{pokemon.name}</h1></li>
            <li>Type:<br/>{pokemon.poke_type}</li>
            <li>Attack:<br/>{pokemon.attack}</li>
            <li>Defense:<br/>{pokemon.defense}</li>
          </ul> 

          <div className="pokemon-detail moves-container">
            <label>Moves:</label>
            <ul>{movesList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;