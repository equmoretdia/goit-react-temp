import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>LOAD THE ROUTE...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
