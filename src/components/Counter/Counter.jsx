import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/myValue/slice';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      {value}
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};
