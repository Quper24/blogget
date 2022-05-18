import style from './Post.module.css';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import { ReactComponent as DelIcon } from './img/delete.svg';

export const Post = ({ postData }) => {
  console.log(postData);
  const {
    thumbnail,
    title,
    author,
    ups,
    created: date,
  } = postData;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title} />

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
