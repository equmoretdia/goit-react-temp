import { createSlice } from '@reduxjs/toolkit';

export const myClickSlice = createSlice({
  name: 'myClick',
  initialState: 0,
  reducers: {
    update(state, action) {
      return state + action.payload;
    },
  },
});

console.log(myClickSlice);

export const { update } = myClickSlice.actions;
