import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import Comments from '../Modal/Comments';
import FormComment from '../Modal/FormComment';
import { Text } from '../../UI/Text';
import Preloader from '../../UI/Preloader';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const data = useCommentsData(id);
  const { status, post, comments } = data;
  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader size={100}/>}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <Text As='h2' className={style.title} size={22} tsize={26}>
              {post.title}
            </Text>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>

            <Text As='p' className={style.author}>
              {post.author}
            </Text>

            <FormComment />

            <Comments comments={comments} />

            <button className={style.close} onClick={() => closeModal()}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
