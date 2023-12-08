import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;
    if (prevProps.pokemonName !== pokemonName) {
      //   console.log('prevProps.pokemonName: ', prevProps.pokemonName);
      //   console.log('this.props.pokemonName: ', this.props.pokemonName);
      console.log("pokemon's name is changed");
      this.setState({ loading: true, pokemon: null, error: null });
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
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {!pokemonName && <div>Please fill in the pokemon name</div>}
        {loading && <div>We are loading...</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              width="300"
              alt={pokemon.name}
            />
          </div>
        )}
      </div>
    );
  }
}
