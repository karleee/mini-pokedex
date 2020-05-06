import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <p className="number">{pokemon.id}</p> 
      <img src={pokemon.thumbnail_image_url} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </Link>
  </li>
);

export default PokemonIndexItem;