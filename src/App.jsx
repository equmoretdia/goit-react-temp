// import { useEffect, lazy } from 'react';
// import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import { TodosView } from './views/TodosView';
import { HomeView } from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from './views/LoginView';
import Container from './components/Container';
// import { authOperations } from './redux/auth';

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const TodosView = lazy(() => import('./views/TodosView'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/todos" element={<TodosView />} />
      </Routes>
    </Container>
  );
};
