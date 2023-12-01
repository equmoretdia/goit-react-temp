import React from 'react';

const ToDoFilter = ({ value, onChange }) => {
  return (
    <label>
      Filter
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default ToDoFilter;
