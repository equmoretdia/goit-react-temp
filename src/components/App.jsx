import React from 'react';
// import AppBar from './AppBar/AppBar';
import SignupForm from './SignupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Clock from './Clock/Clock';
import SkipEffectOnFirstRender from './SkipEffectOnFirstRender/SkipEffectOnFirstRender';
import PokemonView from '../views/PokemonView';

import colors from 'data/colors.json';

export default function App() {
  return (
    <>
      {/* <AppBar /> */}
      <SignupForm />
      <ColorPicker options={colors} />
      <Counter />
      <Clock />
      <SkipEffectOnFirstRender />
      <PokemonView />
    </>
  );
}
