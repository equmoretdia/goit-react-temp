import { createSlice } from '@reduxjs/toolkit';

export const myValueSlice = createSlice({
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
