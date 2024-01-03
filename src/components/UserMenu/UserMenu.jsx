import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/userAuth/slice';

export const UserMenu = () => {
  const login = useSelector(state => state.userAuth.login);
  const dispatch = useDispatch();
  return (
    <div>
      {login}
      {/* I used this check when isLoggedIn check for UserMenu in AppBar wasn't 
      there, and it worked either */}
      {/* {login && <button onClick={() => dispatch(logOut())}>Log out</button>} */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
