import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm/PokemonForm';
import PokemonInfo from './PokemonInfo/PokemonInfo';
import css from './PokemonView.module.css';

export default class PokemonView extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemon => {
    this.setState({ pokemonName: pokemon });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div className={css.div}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
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
}
