import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { Text } from '../../../UI/Text';
import { useContext, useRef } from 'react';
export const FormComment = () => {
  const { auth } = useContext(authContext);
  const refTextarea = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refTextarea.current.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={style.textarea} ref={refTextarea} />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
