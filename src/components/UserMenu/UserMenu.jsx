import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/userAuth/slice';

export const UserMenu = () => {
  //   const navigate = useNavigate();
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
      {/* onClick function is expanded with navigate to LoginPage if dashboard
       page's useEffect with isLoggedIn check is not used. Either way is OK. */}
      {/* {<button onClick={() => {
            dispatch(logOut())};
            navigate('/login', { replace: true });
            }>Log out</button>} */}
    </div>
  );
};
