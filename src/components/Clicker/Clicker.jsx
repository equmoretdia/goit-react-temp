import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../redux/myClick/slice';

export const Clicker = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.myClick);
  return (
    <div>
      <h2>Number of clicks: {numberOfClicks}</h2>
      <button onClick={() => dispatch(update(5))}>Add 5 clicks</button>
      <button onClick={() => dispatch(update(10))}>Add 10 clicks</button>
      <button onClick={() => dispatch(update(20))}>Add 20 clicks</button>
    </div>
  );
};
