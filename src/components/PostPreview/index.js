/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import rectifyFormat from '../../selectors/rectifyFormat';
import './style.scss';

function PostPreview({
  cover, title, created_at, id, category,
}) {
  const date = rectifyFormat(created_at);

  return (
    <article className="post-preview">
      <div className="post-preview__cover">
        <img src={`/images/categories/${cover}.jpg`} alt={category} className="post-preview__img" />
      </div>
      <h2 className="post-preview__title">{title}</h2>
      <p className="post-preview__date">Publiée le {date}</p>
      <span className="spacer" />
      <Link className="thumbnail__link" to={`/annonces/${id}`} title={`vers l'annonce "${title}"`}>
        <Button label="Voir l'annonce" btnstyle="outlined" />
      </Link>
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
