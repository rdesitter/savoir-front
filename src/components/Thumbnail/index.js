import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThumbnailPreview from './ThumbnailPreview';
import { getPosts } from '../../actions';

import './style.scss';

function Thumbnail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const listOfPosts = useSelector((state) => state.posts.posts);
  // console.log(post);

  return (
    <div className="thumbnails">
      {listOfPosts.map((post) => (
        <ThumbnailPreview
          key={post.id}
          avatar={post.user.avatar}
          name={post.user.username}
          userId={post.user.userId}
          category={post.category}
          postId={post.id}
          title={post.title}
          postDescription={post.description}
        />
      ))}
    </div>
  );
}

export default Thumbnail;
