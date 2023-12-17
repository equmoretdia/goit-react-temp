import { useState, useEffect, useRef } from 'react';
import css from './Clock.module.css';

export default function Clock() {
  // lazy state initialization need to be used (useState
  // will run this code only once during the initial render of the
  // component):
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Cleanup function to clear the interval on component unmount
    // Analogue of componentWillUnmount
    return () => stop();
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={css.clock}>
      <p className={css.text}>Current time: {time.toLocaleTimeString()}</p>
      <button className={css.button} type="button" onClick={stop}>
        Stop the timer
      </button>
    </div>
  );
}
