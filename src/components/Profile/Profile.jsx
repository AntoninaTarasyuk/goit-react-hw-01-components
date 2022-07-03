import { PropTypes } from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;

  return <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.name}><b>{username}</b></p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.stats_item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}><b>{stats.followers}</b></span>
      </li>
      <li className={s.stats_item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}><b>{stats.views}</b></span>
      </li>
      <li className={s.stats_item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}><b>{stats.likes}</b></span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}