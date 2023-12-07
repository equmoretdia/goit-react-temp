import React from 'react';
import ToDoItem from './ToDoItem';
import css from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.list}>
      {todos.map(todo => (
        <li key={todo.id} className={css.item}>
          <ToDoItem
            item={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
