import { useContext } from 'react';
import { postContext } from '../../../context/postContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = useContext(postContext);
  return (
    <ul className={style.list}>
      {postsData.map(({ data }) => (
        <Post key={data.id} postData={data} />
      ))}
    </ul>
  );
};
