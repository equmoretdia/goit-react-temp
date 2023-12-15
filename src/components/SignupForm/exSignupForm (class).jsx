import React, { Component } from 'react';
import css from './SignupForm.module.css';

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={css.form} autoComplete="off">
        <label className={css.label}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </label>
        <label className={css.label}>
          {' '}
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </label>
      </form>
    );
  }
}
