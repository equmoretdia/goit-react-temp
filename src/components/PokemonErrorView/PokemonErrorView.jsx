import React from 'react';
import errorImage from 'img/Cat.JPG';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="450" alt="sad cat" />
      <p>{message}</p>
    </div>
  );
}
