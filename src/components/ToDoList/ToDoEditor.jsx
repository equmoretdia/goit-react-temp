import React from 'react';
import css from './ToDoEditor.module.css';

class ToDoEditor extends React.Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <textarea
          className={css.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={css.button}>
          Add
        </button>
      </form>
    );
  }
}

export default ToDoEditor;
