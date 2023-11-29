import React from 'react';

import Controls from './Controls';
import css from './Couneter.module.css';

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    // this.state.value += 1; // !!! it is forbidden to update state directly
    //
    // handleIncrement = event => {
    // console.log('increase by 1');
    // console.log(event); //SyntheticBaseEvent
    // setTimeout(() => {
    //   console.log(event.target); //<button type="button">Increase by 1</button>
    // }, 1000);
    // console.log(event.type); //click
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // this.state.value -= 1; // !!! it is forbidden to update state directly
    //
    // handleDecrement = event => {
    // console.log('decrease by 1');
    // console.log(event); //SyntheticBaseEvent
    // console.log(event.target); //<button type="button">Decrease by 1</button>
  };

  render() {
    return (
      <div className={css.counter}>
        <h2 className={css.header}>Counter</h2>
        <span className={css.value}>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
