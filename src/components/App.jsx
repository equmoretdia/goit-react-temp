import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import css from './App.module.css';

export default class App extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

  render() {
    const { pokemon, loading } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* <ToastContainer autoClose={3000} /> */}
        {loading && <h1>we are loading...</h1>}
        {pokemon && <div>{pokemon.name}</div>}
      </div>
    );
  }
}
