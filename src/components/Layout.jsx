import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          It's header:
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Collection</NavLink>
          </li>
        </ul>
      </header>
      <main>
        It's main:
        <Outlet />
      </main>
      <footer>Footer is here</footer>
    </div>
  );
};

export default Layout;
