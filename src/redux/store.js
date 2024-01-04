import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //defaults to localStorage for web

// // Following code has been added/moved to slice.js:
import { myValueSlice } from './myValue/slice';
import { userAuthSlice } from './userAuth/slice';
import { myClickSlice } from './myClick/slice';
// // import { createSlice } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const persistConfig = {
  key: 'myClick',
  storage,
  // whitelist: ['value'],
  // blacklist: ['_persist'],
};

const persistedMyClickReducer = persistReducer(
  persistConfig,
  myClickSlice.reducer
);

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
    myClick: persistedMyClickReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
