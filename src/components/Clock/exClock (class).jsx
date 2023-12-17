import React, { Component } from 'react';
import css from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );

    // setInterval(
    //   () => this.setState({ time: new Date().toLocaleTimeString() }),
    //   5000
    // );
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { time } = this.state;
    return (
      <div className={css.clock}>
        <p className={css.text}>Current time: {time}</p>
        <button className={css.button} type="button" onClick={this.stop}>
          Stop the timer
        </button>
      </div>
    );
  }
}
