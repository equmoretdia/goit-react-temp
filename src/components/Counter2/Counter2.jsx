// import { useState} from 'react';
import { useReducer } from 'react';
import css from './Counter2.module.css';

function countReducer(state, action) {
  //   console.log(action);
  switch (action.type) {
    case 'increment':
      //   return state + action.payload;
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      //   return state - action.payload;
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Counter() {
  // const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(countReducer, 0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className={css.container}>
      {/* <p className={css.value}>{count}</p> */}
      <p className={css.value}>{state.count}</p>
      <div className={css.controls}>
        <button
          type="button"
          className={css.button}
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          Increase by 1
        </button>
        <button
          type="button"
          className={css.button}
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          Decrease by 1
        </button>
      </div>
    </div>
  );
}
