import Layout from './Layout';
// import Home from 'pages/Home';
// import Dogs from 'pages/Dogs';
// import Dog from 'pages/Dog';
import Gallery from './Gallery';
import Subbreeds from './Subbreeds';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const Dog = lazy(() => import('../pages/Dog'));

// in our example Gallery and Subbreeds are components
// with default export, but in case they were not, we'd
// do as below:
// const Gallery = lazy(() =>
//   import('./Gallery').then(module => {
//     return { ...module, default: module.Gallery };
//   })
// );
// const Subbreeds = lazy(() =>
//   import('./Subbreeds').then(module => ({
//      ...module, default: module.Subbreeds
//   }))
// );
// it is because import is async and it expects the
// object with property default is returned from module,
// so we create it manually

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Home />}></Route>
          <Route path="/dogs" element={<Dogs />}></Route>
          <Route path="/dogs/:dogId" element={<Dog />}></Route> */}
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<Dog />}>
          <Route path="add-info" element={<div>Add-info</div>} />
          <Route path="subbreeds" element={<Subbreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
