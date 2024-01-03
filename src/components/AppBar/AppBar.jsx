import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
      </ul>
      <br />
    </header>
  );
};
