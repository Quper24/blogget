import style from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import Modal from '../../../../Modal';

export const Content = ({ title, author, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          bold
          size={14}
          tsize={22}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        medium
        color='orange'
        className={style.linkAuthor}
        href='#autor'
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal
          id={id}
          title={title}
          author={author}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
