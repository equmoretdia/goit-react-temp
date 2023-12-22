import Layout from './Layout';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import Dog from 'pages/Dog';
import Gallery from './Gallery';
import Subbreeds from './Subbreeds';

import { Routes, Route } from 'react-router-dom';

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
