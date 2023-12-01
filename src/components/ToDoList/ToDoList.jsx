import React from 'react';
import css from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.list}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={css.item}>
          <input
            type="checkbox"
            className={css.checkbox}
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className={css.text}>{text}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => onDeleteTodo(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
