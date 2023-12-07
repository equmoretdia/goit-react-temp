import React from 'react';
import css from './ToDoFilter.module.css';

const ToDoFilter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Filter
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default ToDoFilter;
