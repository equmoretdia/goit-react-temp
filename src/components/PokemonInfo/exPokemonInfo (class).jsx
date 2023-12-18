import { Component } from 'react';
import PokemonErrorView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';
import PokemonPendingView from 'components/PokemonPendingView/PokemonPendingView';
import PokemonApi from 'services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;
    if (prevProps.pokemonName !== pokemonName) {
      //   console.log('prevProps.pokemonName: ', prevProps.pokemonName);
      //   console.log('this.props.pokemonName: ', this.props.pokemonName);
      console.log("pokemon's name is changed");

      this.setState({ status: Status.PENDING });

      //I use setTimout to delay the fetch, it is not needed in fact
      //   setTimeout(() => {
      PokemonApi(pokemonName)
        // .then(console.log); // <= all info will be consoled
        .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      //   }, 5000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === Status.IDLE) {
      return <div>Please fill in the pokemon name</div>;
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
}
