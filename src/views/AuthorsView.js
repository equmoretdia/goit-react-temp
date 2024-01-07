import { useState, useEffect } from 'react';
// import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { NavLink, Route, useMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
// // import AuthorSubView from './AuthorSubView';

// const AuthorSubView = lazy(() =>
//   import('./AuthorSubView.js' /* webpackChunkName: "authors-subview"*/)
// );

const AuthorsView = () => {
  const location = useLocation();
  const { pathname } = location;
  //   const { url, path } = useMatch();
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);
  return (
    <>
      <PageHeading text="Authors" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${pathname}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      {/* <hr />
      <Suspense fallback={<h1>Load subroute...</h1>}>
        <Route path={`${path}/:authorId`}>
          {authors && <AuthorSubView authors={authors} />}
        </Route>
      </Suspense> */}
    </>
  );
};

export default AuthorsView;
