import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({ title, thumbnail }) => (
  <img
    className={style.img}
    src={thumbnail.includes('http') ? thumbnail : notphoto}
    alt={title}
  />
);

Thumbnail.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
