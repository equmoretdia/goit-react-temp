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
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={css.clock}>{this.state.time}</div>;
  }
}
