import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;
    if (prevProps.pokemonName !== pokemonName) {
      //   console.log('prevProps.pokemonName: ', prevProps.pokemonName);
      //   console.log('this.props.pokemonName: ', this.props.pokemonName);
      console.log("pokemon's name is changed");
      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`there is no pokemon with "${pokemonName}" name`)
          );
        })
        // .then(console.log); // <= all info will be consoled
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Please fill in the pokemon name</div>;
    }

    if (status === 'pending') {
      return <div>We are loading...</div>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="300"
            alt={pokemon.name}
          />
        </div>
      );
    }
  }
}
