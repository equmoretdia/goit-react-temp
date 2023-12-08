import React from 'react';
import { ImSpinner } from 'react-icons/im';
import pendingImage from 'img/Pending.JPG';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';

const styles = {};

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
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        We are loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
