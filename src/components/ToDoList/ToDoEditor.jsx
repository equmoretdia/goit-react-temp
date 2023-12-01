import React from 'react';

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
      <form className="editor" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          className="textarea"
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    );
  }
}

export default ToDoEditor;
