import data from 'data.json';
import css from './Card.module.css';
import 'index.css';
// import clsx from 'clsx';

const Card = () => {
  // const styles = `${el.id % 2 === 0 ? css.active : css.passive}`;
  return data.map(el => (
    <div className={`${css.red} qwerty`} key={el.id}>
      {/* {el.id > 2 ? <h2>HURRAY</h2> : <h2>NO NO NO</h2>} */}
      {el.id % 2 === 0 ? <h2>OK</h2> : null}
      {el.id % 2 !== 0 && <h2>NOT OK</h2>}
      <h1 className={css.bgBlue}>{el.title}</h1>
      <h5>{el.body}</h5>
      {/* <h5 className={styles}>{el.body}</h5> */}
      {/* <h5 className={el.id % 2 === 0 ? css.active : css.passive}>{el.body}</h5> */}
    </div>
  ));
};

export default Card;
