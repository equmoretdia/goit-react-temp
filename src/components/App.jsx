import React from 'react';
import SignupForm from './SignupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';

import colors from 'data/colors.json';

export default function App() {
  return (
    <>
      <SignupForm />
      <ColorPicker options={colors} />
    </>
  );
}
