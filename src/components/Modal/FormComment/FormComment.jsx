import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { useSelector, useDispatch } from 'react-redux';
import { updateComment } from '../../../store/comment/commentAction';


export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
