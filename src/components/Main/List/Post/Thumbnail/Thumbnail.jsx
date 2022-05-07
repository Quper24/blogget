import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

Thumbnail.propTypes = {
  title: PropTypes.string,
};
