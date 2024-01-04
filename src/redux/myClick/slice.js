import { createSlice } from '@reduxjs/toolkit';

export const myClickSlice = createSlice({
  name: 'myClick',
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

console.log(myClickSlice);

export const { update } = myClickSlice.actions;
