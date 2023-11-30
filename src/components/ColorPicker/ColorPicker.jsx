import React from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends React.Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [`${css.option}`];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(`${css.optionActive}`);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    // const activeOption = this.props.options[this.state.activeOptionIdx];
    // console.log(activeOption);
    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>Color Picker</h2>
        {<p className={css.label}>you chose: {label}</p>}
        {/* {<p className={css.label}>you chose: {activeOption.label}</p>} */}
        <div className={css.set}>
          {options.map(({ label, color }, index) => (
            <span
              key={label}
              className={this.makeOptionClassName(index)}
              onClick={() => this.setActiveIdx(index)}
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
}

export default ColorPicker;
