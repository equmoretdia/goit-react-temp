// import { useEffect } from 'react';
// // import { useState} from 'react';
// import { Link, useRouteMatch, useLocation } from 'react-router-dom';
// // // import { Link, useRouteMatch, useLocation } from 'react-router-dom';
// import slugify from 'slugify';
// // import * as bookShelfAPI from 'services/bookshelf-api';
// import { useSelector, useDispatch } from 'react-redux';
// import { booksOperations, booksSelectors } from 'redux/books';
// // import * as booksOperations from 'redux/books/booksOperations';
// import PageHeading from 'components/PageHeading/PageHeading';

// const makeSlug = string => slugify(string, { lower: true });

// export default function BooksView() {
//   const location = useLocation();
//   const { url } = useRouteMatch();

//   // const [books, setBooks] = useState([]);
//   const dispatch = useDispatch();
//   // const books = useSelector(state => state.books.entities);
//   const books = useSelector(booksSelectors.getBooks);

//   // useEffect(() => {
//   //   bookShelfAPI.fetchBooks().then(setBooks);
//   // }, []);

//   useEffect(() => dispatch(booksOperations.fetchBooks()), [dispatch]);

//   return (
//     <>
//       <PageHeading text="Books" />
//       {/* {books && ( */}
//       {books.length > 0 && (
//         <ul>
//           {books.map(book => (
//             <li key={book.id}>
//               <Link
//                 to={{
//                   pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
//                   state: {
//                     from: {
//                       location,
//                       label: 'Back to all books',
//                     },
//                   },
//                 }}
//               >
//                 {book.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// import { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import slugify from 'slugify';
// import { useSelector, useDispatch } from 'react-redux';
// import { booksOperations, booksSelectors } from 'redux/books';
import PageHeading from 'components/PageHeading/PageHeading';

// const makeSlug = string => slugify(string, { lower: true });

const BooksView = () => {
  // const location = useLocation();
  // const { pathname } = location;

  // const dispatch = useDispatch();
  // const books = useSelector(booksSelectors.getBooks);
  // console.log(books);
  // useEffect(() => {
  //   dispatch(booksOperations.fetchBooks());
  // }, [dispatch]);

  return (
    <>
      <PageHeading text="Books" />
      {/* <PageHeading text="Books" />
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
      )} */}
    </>
  );
};

export default BooksView;
