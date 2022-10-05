import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbnailPreview from './ThumbnailPreview';
import './style.scss';

function Thumbnail({ list, title, url }) {
  return (
    <div className="thumbnails">
      <header className="section__header thumbnails__header">
        <h1 className="section__title thumbnails__title">{title}</h1>
        <Link className="thumbnails__title__link" to={`/${url}`}>Voir toutes les annonces</Link>
      </header>
      <div className="thumbnails__list">
        {list.map((post) => (
          <ThumbnailPreview
            key={post.id}
            // avatar={post.user.avatar}
            // name={post.user.username}
            // userId={post.user.userId}
            userId={1}
            avatar="Toto"
            name="Tata"
            category="Bidon"
            // category={post.category}
            postId={post.id}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Thumbnail;
