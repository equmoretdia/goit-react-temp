import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-view" */)
);
const AuthorsView = lazy(() =>
  import('../views/AuthorsView.js' /* webpackChunkName: "authors-view" */)
);
const BooksView = lazy(() =>
  import('../views/BooksView' /* webpackChunkName: "books-view" */)
);
const BookDetailsView = lazy(() =>
  import('../views/BookDetailsView' /* webpackChunkName: "book-view" */)
);
// const NotFoundView = lazy(() =>
//   import('../views/NotFoundView.js' /* webpackChunkName: "404-view" */)
// );

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />} />
        <Route path="books" element={<BooksView />} />
        <Route path="books/:slug" element={<BookDetailsView />} />
        {/* <Route element={<NotFoundView />} /> */}
      </Route>
    </Routes>
  );
};
