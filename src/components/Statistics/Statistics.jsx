import { PropTypes } from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return <div className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.stats}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key={id} style={{backgroundColor: getRandomColor()}}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};