/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

import './style.scss';

function PostPreview({
  cover, title, created_at, id, category,
}) {
  return (
    <article className="post-preview">
      <div className="post-preview__cover">
        <img src={`/images/${cover}.jpeg`} alt={category} className="post-preview__img" />
      </div>
      <h2 className="post-preview__title">{title}</h2>
      <p className="post-preview__date">Publié le {created_at}</p>
      <div className="post-preview__buttons">
        <Link to={`/annonce/${id}`}>
          <Button label="Voir l'annonce" />
        </Link>
        <Link to={`/annonce/${id}/effacer`}>
          <Button btnstyle="delete" icon="delete" />
        </Link>
      </div>
    </article>
  );
}

PostPreview.propTypes = {
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PostPreview;
