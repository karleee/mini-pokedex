import React from 'react';

const PokemonHome = () => (
    <section className="pokemon-detail">
        <section className="pokemon-displays">
            <section className="pokemon-image-display">
                <figure>
                    <img/>
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
        <section className="pokemon-detail-display"></section>
    </section>
);

export default PokemonHome;