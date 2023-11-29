import React from 'react';
import css from './Couneter.module.css';

class Counter extends React.Component {
  render() {
    return (
      <div className={css.counter}>
        <span className={css.counterValue}>0</span>
        <div className={css.counterControls}>
          <button type="button">+1</button>
          <button type="button">-1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
