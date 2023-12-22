import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Collection</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dogs" element={<div>Collection</div>}></Route>
        <Route path="/dogs" element={<div>Collection</div>}></Route>
        <Route path="/dogs/:dogId" element={<div>Collection item</div>}></Route>
      </Routes>
    </div>
  );
};
