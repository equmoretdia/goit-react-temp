import css from './Event.module.css';
import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import format from '../../utils/time-parser';
import iconSize from '../../constants/iconSize';

const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedEventStart = format.formatEventStart(start);
  const duration = format.formatEventDuration(start, end);
  return (
    <li className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt
          className={css.icon}
          color="inherit"
          size={iconSize.av}
        />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} color="inherit" size={iconSize.av} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt
          className={css.icon}
          color="inherit"
          size={iconSize.av}
        />
        {formattedEventStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} color="inherit" size={iconSize.av} />
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </li>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;

console.log(css);
