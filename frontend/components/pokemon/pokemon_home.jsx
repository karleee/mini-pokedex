import React from 'react';

const PokemonHome = () => (
  <div className="pokemon-detail screens-container">
    <div className="pokemon-detail image-screens">
      <div className="pokemon-detail poke-image-display">
        <div className="pokemon-detail screw-wrapper">
          <div className="pokemon-detail screw-button"></div>
          <div className="pokemon-detail screw-button"></div>
        </div>

        <div className="pokemon-detail glass-screen-display">
          <img/>
          <div className="glass-streak-1"></div>
          <div className="glass-streak-2"></div>
          <div className="glass-streak-3"></div>
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
        <span className="mock-line-1"></span>
        <span className="mock-line-2"></span>
        <span className="mock-line-3"></span>
        <span className="mock-line-4"></span>
      </div>
    </div>

    <div className="pokemon-detail info-container"></div>
  </div>
);

export default PokemonHome;