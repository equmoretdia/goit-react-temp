import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../../redux/userAuth/slice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    // console.log(form.elements.login.value);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
