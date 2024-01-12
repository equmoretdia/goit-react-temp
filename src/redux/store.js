import { configureStore } from '@reduxjs/toolkit';
// import  booksReducer  from './books/booksReducer';
import { booksReducer } from './books/booksReducer';

export const store = configureStore({
  reducer: {
    // books: (state = []) => state,
    books: booksReducer,
  },
});
