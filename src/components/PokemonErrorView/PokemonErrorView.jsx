import React from 'react';
import errorImage from 'img/Cat.JPG';
import css from './PokemonErrorView.module.css';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="450" alt="sad cat" />
      <p className={css.text}>{message}</p>
    </div>
  );
}
