import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// // Following code has been added/moved to slice.js:
import { myValueSlice } from './myValue/slice';
import { userAuthSlice } from './userAuth/slice';
import { myClickReducer } from './myClick/slice';
// // import { createSlice } from '@reduxjs/toolkit';

import logger from 'redux-logger';

// // Following code has been moved to slice.js:

// // const myValueSlice = createSlice({
// //   name: 'myValue',
// //   initialState: 10,
// //   reducers: {
// //     increment(state, action) {
// //       return state + action.payload;
// //     },
// //     decrement(state, action) {
// //       return state - action.payload;
// //     },
// //   },
// // });

// console.log(myValueSlice);

// export const { increment, decrement } = myValueSlice.actions;

// export const increment = createAction('myCounter/increment');
// export const decrement = createAction('myCounter/decrement');

// console.log([increment.toString()]);

// const myReducer = createReducer(10, builder => {
//   builder.addCase(increment, (state, action) => state + action.payload);
//   builder.addCase(decrement, (state, action) => state - action.payload);
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    userAuth: userAuthSlice.reducer,
    myClick: myClickReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
