import React, { Component } from 'react';
import css from './Counter.module.css';

export default class Conter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
    totalClicks: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  calculateTotalClicks() {
    const { counterA, counterB } = this.state;
    return counterA + counterB;
  }

  componentDidMount() {
    this.setState({
      totalClicks: this.calculateTotalClicks(),
    });
  }

  componentDidUpdate(prevprops, prevState) {
    const { counterA, counterB } = this.state;
    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      this.setState({
        totalClicks: this.calculateTotalClicks(),
      });
    }
  }

  render() {
    const { counterA, counterB, totalClicks } = this.state;
    return (
      <div className={css.counter}>
        <h2 className={css.header}>There are {totalClicks} clicks totally</h2>
        <div className={css.controls}>
          <button
            className={css.button}
            type="button"
            onClick={this.handleCounterAIncrement}
          >
            Counter "A" is clicked {counterA} times
          </button>
          <button
            className={css.button}
            type="button"
            onClick={this.handleCounterBIncrement}
          >
            Counter "B" is clicked {counterB} times
          </button>
        </div>
      </div>
    );
  }
}
