import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
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
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};
