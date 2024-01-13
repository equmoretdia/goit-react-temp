import { useSelector } from 'react-redux';
import styles from './Stats.module.css';
import {
  getTotalTodoCount,
  getCompletedTodoCount,
} from '../../redux/todos/todos-selectors';

export default function Stats() {
  const total = useSelector(getTotalTodoCount);
  const completed = useSelector(getCompletedTodoCount);

  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.value}>{total}</span>
        <span className={styles.label}>Всего</span>
      </p>
      <p className={styles.item}>
        <span className={styles.value}>{completed}</span>
        <span className={styles.label}>Выполнено</span>
      </p>
    </div>
  );
}
