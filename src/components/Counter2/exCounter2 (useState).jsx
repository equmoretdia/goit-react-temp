import { useState } from 'react';
import css from './Counter2.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.container}>
      <p className={css.value}>{count}</p>
      <div className={css.controls}>
        <button
          type="button"
          className={css.button}
          onClick={() => setCount(state => state + 1)}
        >
          Increase by 1
        </button>
        <button
          type="button"
          className={css.button}
          onClick={() => setCount(state => state - 1)}
        >
          Decrease by 1
        </button>
      </div>
    </div>
  );
}
