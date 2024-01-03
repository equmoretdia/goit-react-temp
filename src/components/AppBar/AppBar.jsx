import { useSelector } from 'react-redux';
import { AppNavigation } from '../AppNavigation/AppNavigation';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.userAuth.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid grey',
      }}
    >
      <AppNavigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
