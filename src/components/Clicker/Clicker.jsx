import { useSelector, useDispatch } from 'react-redux';
import { update, myClickValue } from '../../redux/myClick/slice';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const Clicker = () => {
  useLogOutRedirect();
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(myClickValue);
  return (
    <div>
      <h2>Number of clicks: {numberOfClicks}</h2>
      <button onClick={() => dispatch(update(5))}>Add 5 clicks</button>
      <button onClick={() => dispatch(update(10))}>Add 10 clicks</button>
      <button onClick={() => dispatch(update(20))}>Add 20 clicks</button>
    </div>
  );
};
