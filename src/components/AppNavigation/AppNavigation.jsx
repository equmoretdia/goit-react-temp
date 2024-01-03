import { NavLink } from 'react-router-dom';

export const AppNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Counter</NavLink>
      </li>
    </ul>
  );
};
