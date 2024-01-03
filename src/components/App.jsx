import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, DashboardPage } from 'pages';
import { Layout } from './Layout';
import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
