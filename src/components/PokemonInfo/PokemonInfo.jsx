import { Component } from 'react';
import PokemonErrorView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';
import PokemonPendingView from 'components/PokemonPendingView/PokemonPendingView';
import PokemonApi from 'services/pokemon-api';

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

      //I use setTimout to delay the fetch, it is not needed in fact
      //   setTimeout(() => {
      PokemonApi(pokemonName)
        // .then(console.log); // <= all info will be consoled
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      //   }, 5000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Please fill in the pokemon name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
