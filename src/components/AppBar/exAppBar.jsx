import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/Friends';
import authContext from '../../contexts/auth/context';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <authContext.Consumer>
      {({ user, isLoggedIn, onLogIn, onLogOut }) => (
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
      )}
    </authContext.Consumer>
  );
}
