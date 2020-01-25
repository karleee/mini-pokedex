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
      <section className="pokemon-detail">
        <section className="pokemon-displays">
          <section className="pokemon-image-display">
            <figure>
              <img src={pokemon.main_image_url} alt={pokemon.name} />
              <span className="image-line-1"></span>
              <span className="image-line-2"></span>
              <span className="image-line-3"></span>
            </figure>
            <span className="small-red-button"><span className="button-inner"></span></span>
            <span className="vent-line-1"></span>
            <span className="vent-line-2"></span>
            <span className="vent-line-3"></span>
          </section>
          <section className="pokemon-mock-display">
            <span className="mock-line-1"></span>
            <span className="mock-line-2"></span>
            <span className="mock-line-3"></span>
            <span className="mock-line-4"></span>
          </section>
        </section>
        <section className="pokemon-detail-display">
          <ul className="pokemon-stats">
            <li><h1>{pokemon.name}</h1></li>
            <li>Type:<br/>{pokemon.poke_type}</li>
            <li>Attack:<br/>{pokemon.attack}</li>
            <li>Defense:<br/>{pokemon.defense}</li>
          </ul>
          <div className="pokemon-moves">
            <label>Moves:</label>
            <ul>{movesList}</ul>
          </div>
        </section>
      </section>
    )
  }
}

export default PokemonDetail;