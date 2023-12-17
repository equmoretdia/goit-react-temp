import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from '../components/PokemonForm/PokemonForm';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';
import css from './PokemonView.module.css';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className={css.div}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />

      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
