import React from 'react';
import { ImSpinner } from 'react-icons/im';
import pendingImage from 'img/Pending.JPG';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';
import css from './PokemonPendingView.module.css';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className={css.icon} />
        <span className={css.text}>We are loading...</span>
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
