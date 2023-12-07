import React from 'react';
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.controls}>
    <button type="button" className={css.button} onClick={onIncrement}>
      Increase by 1
    </button>
    <button type="button" className={css.button} onClick={onDecrement}>
      Decrease by 1
    </button>
  </div>
);

export default Controls;
