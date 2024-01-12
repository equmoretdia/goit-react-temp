import { useEffect } from 'react';
// import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// // // import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
// import * as bookShelfAPI from 'services/bookshelf-api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksOperations';
import {
  selectBooks,
  selectIsLoading,
  selectError,
} from '../redux/books/booksSelectors';
// // import * as booksOperations from 'redux/books/booksOperations';
import PageHeading from 'components/PageHeading/PageHeading';

const makeSlug = string => slugify(string, { lower: true });

const BooksView = () => {
  const location = useLocation();
  const { pathname } = location;
  // //   const { url } = useRouteMatch();

  // const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  //   // const books = useSelector(state => state.books.entities);
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  //   // console.log(books); //delete me
  //   // useEffect(() => {
  //   //   bookShelfAPI.fetchBooks().then(setBooks);
  //   // }, []);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Books are loaded...</b>}
      <PageHeading text="Books" />
      {/* {books && ( */}
      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${pathname}/${makeSlug(
                    `${book.title} ${book.id}`
                  )}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to all books',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BooksView;
