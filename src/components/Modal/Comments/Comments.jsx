import style from './Comments.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../UI/Text';
import Date from '../../Main/List/Post/Date';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {comments.map((item) => (
      <li className={style.item} key={item.id}>
        <Text className={style.author} As='h3' size={18} tsize={22}>
          {item.author}
        </Text>
        <Text className={style.comment} As='p' size={14} tsize={18}>
          {item.body.replaceAll(`&gt;`, ' ')}
        </Text>
        <Date date={item.created} />
      </li>
    ))}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
