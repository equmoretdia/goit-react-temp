import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      {/* <NavLink exact to="/" className={`${styles.link} ${styles.activeLink}`}> */}
      <NavLink to="/" className={`${styles.link} ${styles.activeLink}`}>
        Main
      </NavLink>

      {/* <NavLink
        to="/authors"
        className={`${styles.link} ${styles.activeLink}`}
      >
        Authors
      </NavLink> */}

      <NavLink to="/books" className={`${styles.link} ${styles.activeLink}`}>
        Books
      </NavLink>
    </nav>
  );
}
