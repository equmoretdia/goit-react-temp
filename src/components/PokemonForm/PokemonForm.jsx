import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';

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
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Find
      </button>
    </form>
  );
}
