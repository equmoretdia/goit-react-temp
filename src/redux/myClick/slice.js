import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //defaults to localStorage for web

const myClickSlice = createSlice({
  name: 'myClick',
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

console.log(myClickSlice);

const persistConfig = {
  key: 'myClick',
  storage,
  // whitelist: ['value'],
  // blacklist: ['_persist'],
};

export const myClickReducer = persistReducer(
  persistConfig,
  myClickSlice.reducer
);

export const { update } = myClickSlice.actions;

//Selectors

export const myClickValue = state => state.myClick.value;
