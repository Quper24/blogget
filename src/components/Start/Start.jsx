import { Text } from '../../UI/Text';
import style from './Start.module.css';
import PropTypes from 'prop-types';

export const Start = ({ text }) => (
  <div className={style.wrapper}>
    {text ? (
      <Text As='h2' size={20} tsize={24} dsize={26} color='orange'>
        {text}
      </Text>
    ) : (
      <>
        <Text As='h2' size={20} tsize={24} dsize={26} className={style.title}>
          Стартовая страница
        </Text>

        <Text
          As='p'
          size={18}
          tsize={22}
          dsize={24}
          center
          className={style.description}
        >
          Добро пожаловать!
        </Text>
        <Text
          As='p'
          size={16}
          tsize={20}
          dsize={22}
          center
          className={style.description}
        >
          Выберите категорию
        </Text>
      </>
    )}
  </div>
);

Start.propTypes = {
  text: PropTypes.string,
};
