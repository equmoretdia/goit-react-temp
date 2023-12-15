import { useState } from 'react';
import css from './SignupForm.module.css';

export default function SignupForm() {
  //   const [inputState] = useState('');

  //   const [state, setState] = useState({ email: '', password: '' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   console.log(setEmail);

  // variant 1
  //   const handleEmailChange = e => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = e => {
  //     setPassword(e.target.value);
  //   };

  // variant 2
  //   const handleEmailChange = e => {
  //     setState(prevState => ({ ...prevState, email: e.target.value }));
  //   };

  //   const handlePasswordChange = e => {
  //     setState(prevState => ({ ...prevState, password: e.target.value }));
  //   };

  // variant 3 - best one, we use one function,
  // but separate hooks for each state
  const handleChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          //   onChange={handleEmailChange}
          onChange={handleChange}
          //   value={state.email}
          value={email}
        />
      </label>
      <label className={css.label}>
        {' '}
        <span>Password</span>
        <input
          type="password"
          name="password"
          //   onChange={handlePasswordChange}
          onChange={handleChange}
          //   value={state.password}
          value={password}
        />
      </label>
    </form>
  );
}
