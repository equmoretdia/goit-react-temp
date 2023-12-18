import { useState, useEffect } from 'react';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView';
import PokemonDataView from '../PokemonDataView/PokemonDataView';
import PokemonPendingView from '../PokemonPendingView/PokemonPendingView';
import PokemonApi from 'services/pokemon-api';
import css from './PokemonInfo.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      //first render, pokemonName is not yet defined by user (undefined)
      //thus fetch is not needed
      return;
    }
    setStatus(Status.PENDING);
    PokemonApi(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div className={css.info}>Please fill in the pokemon name</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
