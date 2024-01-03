import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { Layout } from './Layout';
import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />}>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="counter" element={<Counter />} />
      </Route>
    </Routes>
  );
};
