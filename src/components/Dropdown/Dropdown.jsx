import React from 'react';
import css from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  // OPTION 1

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  // OPTION 2

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={css.dropdown}>
        <button
          type="button"
          //   onClick={this.toggle}
          onMouseOver={this.toggle}
          className={css.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {/* <button type="button" onClick={this.show} className={css.toggle}>
          Show
        </button>
        <button type="button" onClick={this.hide} className={css.toggle}>
          Hide
        </button> */}
        {this.state.visible && <div className={css.menu}>Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
