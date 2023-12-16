import { useState, useEffect } from 'react';
import css from './Counter.module.css';

//this function uses useState hook and it works

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    // console.log('"useEffect" is started' + Date.now());
    setTotalClicks(counterA + counterB);
  }, [counterA, counterB]);

  return (
    <div className={css.counter}>
      <h2 className={css.header}>There are {totalClicks} clicks totally</h2>
      <div className={css.controls}>
        <button
          className={css.button}
          type="button"
          onClick={handleCounterAIncrement}
        >
          Counter "A" is clicked {counterA} times
        </button>
        <button
          className={css.button}
          type="button"
          onClick={handleCounterBIncrement}
        >
          Counter "B" is clicked {counterB} times
        </button>
      </div>
    </div>
  );
}
