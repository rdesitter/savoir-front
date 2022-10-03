import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from '../Label';
import Button from '../Button';

import './style.scss';

function ThumbnailPreview({
  avatar,
  name,
  category,
  title,
  userId,
  postId,
}) {
  return (
    <article className="thumbnail">
      <Link to={`/profil/${userId}`} title={`vers le profil de ${name}`}>
        <div className="thumbnail-user__infos">
          <div className="thumbnail-user__img">
            <img className="thumbnail-user__img__avatar" src={`/images/avatars/${avatar}.png`} alt={`profil de ${name}`} />
          </div>
          <h3 className="thumbnail-user__name">{name}</h3>
        </div>
      </Link>

      <Label label={category} color="light-grey" />

      <Link to={`/annonces/${postId}`} title={`vers l'annonce "${title}"`}>
        <div className="thumbnail-infos">
          <img className="thumbnail-infos__img" src={`/images/categories/${category}.jpg`} alt="Cuisine" />
          <h4 className="thumbnail-infos__title">{title}</h4>
        </div>
      </Link>
      <span className="spacer" />
      <Link to={`/annonces/${postId}`} title={`vers l'annonce "${title}"`}>
        <Button label="Voir l'annonce" btnstyle="outlined" />
      </Link>
    </article>
  );
}

ThumbnailPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,

};

export default ThumbnailPreview;
