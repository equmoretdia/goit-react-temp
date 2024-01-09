// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as booksActions from './booksActions';
import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

//1st step: reducers with actions
// const entities = createReducer([], builder => {
//   builder.addCase(
//     booksActions.fetchBooksSuccess,
//     (_, action) => action.payload
//   );
// });

// const isLoading = createReducer(false, builder => {
//   builder
//     .addCase(booksActions.fetchBooksRequest, () => true)
//     .addCase(booksActions.fetchBooksSuccess, () => false)
//     .addCase(booksActions.fetchBooksError, () => false);
// });

// const error = createReducer(null, builder => {
//   builder
//     .addCase(booksActions.fetchBooksError, (_, action) => action.payload)
//     .addCase(booksActions.fetchBooksRequest, () => null);
// });

//2nd step: reducers with operations
// const entities = createReducer([], builder => {
//   builder.addCase(fetchBooks.fulfilled, (_, action) => action.payload);
// });

// const isLoading = createReducer(false, builder => {
//   builder
//     .addCase(fetchBooks.pending, () => true)
//     .addCase(fetchBooks.fulfilled, () => false)
//     .addCase(fetchBooks.rejected, () => false);
// });

// const error = createReducer(null, builder => {
//   builder
//     .addCase(fetchBooks.rejected, (_, action) => action.payload)
//     .addCase(fetchBooks.pending, () => null);
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

//3rd step: createSlice
// 🔥 USES IMMER FOR STATE COPY MUTATION (it works with copy of state and then add
// it to the state w / o its mutation)
const booksSlice = createSlice({
  name: 'books',
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: builder => {
    // [fetchBooks.fulfilled]: (state, action) => {
    //   return {
    //     ...state,
    //     // entities: [...state.entities, ...action.payload] // if we need to add
    //     entities: action.payload, //but we need to replace
    //   };
    // },
    builder
      .addCase(
        fetchBooks.fulfilled,
        (state, { payload }) => (state.entities = payload)
      )
      .addCase(fetchBooks.pending, state => (state.isLoading = true));
  },
});

export default booksSlice.reducer;
