import { useSelector, useDispatch } from 'react-redux';
import ThumbnailPreview from './ThumbnailPreview';

import './style.scss';

function Thumbnail() {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  dispatch({
    type: 'DISPLAY_POST',
  });
  return (
    <div className="thumbnails">
      <ThumbnailPreview
        avatar={selectedPost.user.avatar}
        name={selectedPost.user.username}
        userId={selectedPost.user.userId}
        category={selectedPost.category}
        postId={selectedPost.id}
        title={selectedPost.title}
        postDescription={selectedPost.description}
      />
      <ThumbnailPreview
        avatar={selectedPost.user.avatar}
        name={selectedPost.user.username}
        userId={selectedPost.user.userId}
        category={selectedPost.category}
        postId={selectedPost.id}
        title={selectedPost.title}
        postDescription={selectedPost.description}
      />
      <ThumbnailPreview
        avatar={selectedPost.user.avatar}
        name={selectedPost.user.username}
        userId={selectedPost.user.userId}
        category={selectedPost.category}
        postId={selectedPost.id}
        title={selectedPost.title}
        postDescription={selectedPost.description}
      />
    </div>
  );
}

export default Thumbnail;
