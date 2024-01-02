import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('myCounter/increment');
export const decrement = createAction('myCounter/decrement');

console.log([increment.toString()]);

const myReducer = createReducer(10, builder => {
  builder.addCase(increment, (state, action) => state + action.payload);
  builder.addCase(decrement, (state, action) => state - action.payload);
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
