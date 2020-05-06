import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <span className="number">{pokemon.id}</span> 
      <img src={pokemon.thumbnail_image_url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;