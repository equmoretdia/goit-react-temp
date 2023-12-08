import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';

//import {ReactComponent as MyIcon} from '././xxx.svg' - if we have our
//custom icons, normally we use react-icons

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      return toast.warn('Please fill in the pokemon name', {
        position: 'top-center',
      });
      //   alert('Please fill in the pokemon name'); //or return alert()
      //   return;
    }
    this.props.onSubmit(this.state.pokemonName.trim());
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Find
        </button>
      </form>
    );
  }
}
