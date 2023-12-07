import React, { PureComponent } from 'react';
import css from './Tabs.module.css';

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  //or we should use shouldComponentUpdate if we choose Component instead of PureComponent

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabIdx !== this.state.activeTabIdx;
  //   }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <div className={css.wrapper}>
        <div className={css.set}>
          {items.map((item, idx) => (
            <button
              className={css.button}
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <h2 className={css.title}>{activeTab.label}</h2>
        <p className={css.text}>{activeTab.content}</p>
      </div>
    );
  }
}
