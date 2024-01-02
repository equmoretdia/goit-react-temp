import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 10,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

console.log(myValueSlice);

export const { increment, decrement } = myValueSlice.actions;

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
  },
});
