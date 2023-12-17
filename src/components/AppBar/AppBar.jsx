import { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context';
import css from './AppBar.module.css';

export default function AppBar() {
  // const ctx = useContext(authContext);
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu onLogout={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Sign In
        </button>
      )}
    </header>
  );
}
