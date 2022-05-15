import style from './Post.module.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import { ReactComponent as DelIcon } from './img/delete.svg';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  return (
    <li className={style.post}>
      <Thumbnail title={title} />

      <Content title={title} author={author} />

      <Rating ups={ups} />

      <Date date={date} />

      <button className={style.delete}>
        <DelIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
