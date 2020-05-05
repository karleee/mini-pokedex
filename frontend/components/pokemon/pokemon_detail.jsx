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
    const { pokemon } = this.props;
    if (!pokemon) return null;
    const pokemonMoves = pokemon.moves ? pokemon.moves : [];
    const movesList = pokemonMoves.map(move => <li key={move}>{move}</li>);
    return (
      <div className="pokemon-detail screens-container"> 
        <div className="pokemon-detail image-screens">
          <div className="pokemon-detail poke-image-display">
            <div className="pokemon-detail glass-screen-display">
              <img src={pokemon.main_image_url} alt={pokemon.name} />
              <span className="glass-streak-1"></span>
              <span className="glass-streak-2"></span>
              <span className="glass-streak-3"></span>
            </div>

            <div className="pokemon-detail glass-buttons-wrapper">
              <span className="small-red-button"><span className="button-inner"></span></span>

              <div className="pokemon-detail vent-lines-wrapper">
                <span className="vent-line-1"></span>
                <span className="vent-line-2"></span>
                <span className="vent-line-3"></span>
              </div>
            </div>
          </div>

          <div className="pokemon-mock-display">
            <span className="mock-line-1"></span>
            <span className="mock-line-2"></span>
            <span className="mock-line-3"></span>
            <span className="mock-line-4"></span>
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