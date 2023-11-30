import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker';
//short root due to re-export (index.js in ColorPicker folder)

import colors from 'data/colors';

const App = () => {
  return (
    <>
      <Counter />
      <Dropdown />
      <ColorPicker options={colors} />
    </>
  );
};

export default App;
