import React from 'react';
// import css from './Form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    mail: '',
    experience: 'junior',
    license: false,
  };

  handleChange = event => {
    console.log(event);
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  //   handleNameChange = event => {
  //     console.log(event);
  //     console.log(event.target.value);
  //     console.log(event.currentTarget.value);
  //     this.setState({ name: event.currentTarget.value });
  //   };

  //   handleMailChange = event => {
  //     this.setState({ mail: event.currentTarget.value });
  //   };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenseChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ license: event.currentTarget.checked });
    // or this.setState(prevState => ({ license: !prevState.license }));
  };

  reset = () => {
    this.setState({ name: '', mail: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Mail
          <input
            type="mail"
            name="mail"
            value={this.state.mail}
            onChange={this.handleChange}
          />
        </label>
        <p>Your SW development experience</p>
        <label htmlFor="">
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <label htmlFor="">
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <label htmlFor="">
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>
        <br />
        <label htmlFor="">
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Agree with license conditions
        </label>
        <button type="submit" disabled={!this.state.license}>
          Submit
        </button>
      </form>
    );
    //onChange contains onInput, onBlur and onFocus, but last two we
    //can use separately if needed
  }
}

export default Form;
