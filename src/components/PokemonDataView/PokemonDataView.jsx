import React from 'react';
import css from './PokemonDataView.module.css';

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        alt={name}
      />
      <h2 className={css.header}>{name}</h2>
      <ul>
        {stats.map(entry => (
          <li className={css.stats} key={entry.stat.name}>
            {entry.stat.name}:{entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
