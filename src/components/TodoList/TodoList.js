import Todo from '../Todo';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTodo,
  toggleCompleted,
} from '../../redux/todos/todos-operations';
import { getVisibleTodos } from '../../redux/todos/todos-selectors';
import styles from './TodoList.module.css';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(getVisibleTodos);

  const onDeleteTodo = id => dispatch(deleteTodo(id));
  const onToggleCompleted = id => dispatch(toggleCompleted(id));

  return (
    <ul className={styles.list}>
      {todos.map(({ id, description, completed }) => (
        <li key={id} className={completed ? styles.completed : styles.item}>
          <Todo
            text={description}
            completed={completed}
            onToggleCompleted={() =>
              onToggleCompleted({ id, completed: !completed })
            }
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
}
