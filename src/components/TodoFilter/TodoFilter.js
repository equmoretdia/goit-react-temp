import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/todos/todos-selectors';
import { changeFilter } from '../../redux/todos/todos-actions';
import styles from './TodoFilter.module.css';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Фильтр по содержимому</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
