import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import css from './PokemonForm.module.css';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      return toast.warn('Please fill in the pokemon name', {
        position: 'top-center',
      });
    }
    onSubmit(pokemonName.trim());
    setPokemonName('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} style={styles.form}>
      <input
        className={css.input}
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button className={css.button} type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Find
      </button>
    </form>
  );
}
