import { useState } from 'react';
import css from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    const optionClasses = [`${css.option}`];
    if (index === activeOptionIdx) {
      optionClasses.push(`${css.optionActive}`);
    }
    return optionClasses.join(' ');
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Color Picker</h2>
      {<p className={css.label}>you chose: {label}</p>}
      {/* {<p className={css.label}>you chose: {activeOption.label}</p>} */}
      <div className={css.set}>
        {options.map(({ label, color }, index) => (
          <span
            key={label}
            className={makeOptionClassName(index)}
            onClick={() => setActiveOptionIdx(index)}
            style={{
              backgroundColor: color,
            }}
          ></span>
          // <span
          //   key={label}
          //   className={css.option}
          //   style={{
          //     backgroundColor: color,
          //     transform:
          //       index === activeOptionIdx ? 'scale(1.1)' : 'none',
          //   }}
          // ></span>
        ))}
      </div>
    </div>
  );
}
