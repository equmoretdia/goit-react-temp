import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as booksActions from './booksActions';
// import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
// import { fetchBooks } from './booksOperations';

const entities = createReducer([], builder => {
  builder.addCase(
    booksActions.fetchBooksSuccess,
    (_, action) => action.payload
  );
});

const isLoading = createReducer(false, builder => {
  builder
    .addCase(booksActions.fetchBooksRequest, () => true)
    .addCase(booksActions.fetchBooksSuccess, () => false)
    .addCase(booksActions.fetchBooksError, () => false);
});

const error = createReducer(null, builder => {
  builder
    .addCase(booksActions.fetchBooksError, (_, action) => action.payload)
    .addCase(booksActions.fetchBooksRequest, () => null);
});

// const entities = createReducer([], {
//   [fetchBooks.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchBooks.rejected]: (_, action) => action.payload,
//   [fetchBooks.pending]: () => null,
// });

export default combineReducers({
  entities,
  isLoading,
  error,
});

// // 🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ
// // const booksSlice = createSlice({
// //   name: 'books',
// //   initialState: { entities: [], isLoading: false, error: null },
// //   extraReducers: {
// //     [fetchBooks.fulfilled]: (state, { payload }) => (state.entities = payload),
// //     [fetchBooks.pending]: state => (state.isLoading = true),
// //   },
// // });

// // export default booksSlice.reducer;
