import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from 'services/bookshelf-api';
// import * as booksActions from './booksActions';

// 1st step: async dispatch
// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());
//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };

// 2nd step: createAsyncThunk
// export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
//   const books = await bookShelfAPI.fetchBooks();
//   return books;
// });

//2nd+ step, still createAsyncThunk, but with more error control (try/catch)
// read more: https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      console.log(books);
      return books.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (bookId, { rejectWithValue }) => {
    try {
      const book = await bookShelfAPI.fetchBookById(bookId);
      return book;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
