import { useState, useEffect, useRef } from 'react';
import css from './SkipEffectOnFirstRender.module.css';

//THIS CODE DOESN'T WORK UNFORTUNATELY

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  //   const [isFirstRender, setIsFirstRender] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log(isFirstRender, Date.now());
      isFirstRender.current = false;
      return;
    }

    console.log(`useEffect is performed - ${Date.now()}`);
  });

  // useEffect(() => {
  //   if (isFirstRender) {
  //     console.log(isFirstRender, Date.now());
  //     setIsFirstRender(false);
  //     return;
  //   }
  //   console.log(`useEffect is performed - ${Date.now()}`);
  // });

  return (
    <div className={css.wrapper}>
      <button
        className={css.button}
        type="button"
        onClick={() => setCount(c => c + 1)}
      >
        {count}
      </button>
      <p className={css.text}>
        <code className={css.code}>useEffect</code>
        <br /> of this component is not performed in first render (pls check the
        console)
      </p>
    </div>
  );
}
