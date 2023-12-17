import React from 'react';
// import AppBar from './AppBar/AppBar';
import SignupForm from './SignupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Clock from './Clock/Clock';

import colors from 'data/colors.json';

export default function App() {
  return (
    <>
      {/* <AppBar /> */}
      <SignupForm />
      <ColorPicker options={colors} />
      <Counter />
      <Clock />
    </>
  );
}
