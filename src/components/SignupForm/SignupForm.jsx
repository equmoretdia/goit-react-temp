import { useState, useEffect } from 'react';
import css from './SignupForm.module.css';

const useLocalStorage = (
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse
) => {
  const [state, setState] = useState(() => {
    return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);
  return [state, setState];
};

export default function SignupForm() {
  //   const [inputState] = useState('');

  //   const [state, setState] = useState({ email: '', password: '' });

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // // The nullish coalescing operator checks if the result of the parsing
  // // (JSON.parse(...)) is null or undefined. If it is, it uses the default
  // // value on the right side of the operator, which is an empty string ''.
  // //
  // // console.log(0 || 1); //1
  // // console.log(0 ?? 1); //0
  // // console.log(false || 1); //1
  // // console.log(false ?? 1); //false
  // // console.log(undefined || 1); //1
  // // console.log(undefined ?? 1); //1
  // // console.log(null || 1); //1
  // // console.log(null ?? 1); //1
  // //

  // if we code like this the request to localStorage will be
  // implemented for every render, this is how JS interpretor
  // works...
  // const [email, setEmail] = useState(
  //   JSON.parse(window.localStorage.getItem('email')) ?? ''
  // );
  // const [password, setPassword] = useState(
  //   JSON.parse(window.localStorage.getItem('password')) ?? ''
  // );
  //...thus lazy state initialization need to be used (useState
  // will run this code only once during the initial render of the
  // component):
  // const [email, setEmail] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('email')) ?? '';
  // });
  // const [password, setPassword] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('password')) ?? '';
  // });

  //now we use useLocalStorage custom hook:
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

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

  // useEffect(() => {
  //   window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        <span>Email</span>
        <input
          className={css.input}
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
          className={css.input}
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
