import React from 'react';

const PokemonHome = () => (
  <div className="pokemon-detail screens-container">
    <div className="pokemon-detail image-screens">
      <div className="pokemon-detail poke-image-display">
        <div className="pokemon-detail glass-screen-display">
          <img/>
          <span className="glass-streak-1"></span>
          <span className="glass-streak-2"></span>
          <span className="glass-streak-3"></span>
        </div>

        <div className="pokemon-detail glass-buttons-wrapper">
            <span className="small-red-button"><span className="button-inner"></span></span>
            <span className="vent-line-1"></span>
            <span className="vent-line-2"></span>
            <span className="vent-line-3"></span>
        </div>
      </div>

      <div className="pokemon-mock-display">
        <span className="mock-line-1"></span>
        <span className="mock-line-2"></span>
        <span className="mock-line-3"></span>
        <span className="mock-line-4"></span>
      </div>
    </div>

    <div className="pokemon-detail-display"></div>
  </div>
);

export default PokemonHome;