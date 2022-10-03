import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <div className="thumbnails-type">
        <h2 className="thumbnails-type__title">Ils vous proposent</h2>
        <Link className="thumbnails-type__link" to="/besoin">Voir toutes les annonces</Link>
      </div>
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
          />
        ))}
      </div>
    </>
  );
}

export default Thumbnail;
