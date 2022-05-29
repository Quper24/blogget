import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { postRequestAsync } from '../../../store/posts/postsAction';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = useSelector((state) => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        {postsData.map(({ data }) => (
          <Post key={data.id} postData={data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
