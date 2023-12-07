import React from 'react';
import css from './ToDoItem.module.css';

const ToDoItem = ({ item, onDeleteTodo, onToggleCompleted }) => {
  const { id, text, completed } = item;
  return (
    <>
      <div className={css.checkbox}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={css.text}>{text}</p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteTodo(id)}
      >
        Remove
      </button>
    </>
  );
};

export default ToDoItem;
