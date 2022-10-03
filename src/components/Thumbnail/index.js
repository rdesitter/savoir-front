import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThumbnailPreview from './ThumbnailPreview';
import { getPosts } from '../../actions';
import './style.scss';

function Thumbnail({ list, title, url }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  // console.log(listOfPosts);

  return (
    <>
      <div className="thumbnails-type">
        <h2 className="thumbnails-type__title">{title}</h2>
        <Link className="thumbnails-type__link" to={`/${url}`}>voir toutes les annonces</Link>
      </div>
      <div className="thumbnails">
        {list.map((post) => (
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

Thumbnail.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Thumbnail;
