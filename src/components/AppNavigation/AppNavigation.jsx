import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AppNavigation = () => {
  const isLoggedIn = useSelector(state => state.userAuth.isLoggedIn);
  return (
    <ul>
      {!isLoggedIn && (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/clicker">Clicker</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};
