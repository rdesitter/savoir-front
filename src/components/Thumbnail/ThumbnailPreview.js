import PropTypes from 'prop-types';
import Label from '../Label';
import Button from '../Button';

import './style.scss';
import { Link } from 'react-router-dom';

function ThumbnailPreview({
  avatar,
  name,
  category,
  title,
  postDescription,
}) {
  return (
    <article className="thumbnail">
      {/* TODO: route paramétrée */}
      <Link to="/utilisateur/:id" title={`vers le profil de ${name}`}>
        <div className="thumbnail-user__infos">
          <div className="thumbnail-user__img">
            <img className="thumbnail-user__img__avatar" src={`./images/avatars/${avatar}.png`} alt={`profil de ${name}`} />
          </div>
          <h3 className="thumbnail-user__name">{name}</h3>
        </div>
      </Link>
      <Label label="cuisine" />
      {/* TODO: route paramétrée */}
      <Link to="/annonce/:id" title={`vers l'annonce "${title}"`}>
        <div className="thumbnail-infos">
          <img className="thumbnail-infos__img" src={`./images/categories/${category}.jpg`} alt="Cuisine" />
          <h4 className="thumbnail-infos__title">{title}</h4>
          <p className="thumbnail-infos__description">
            {postDescription}
          </p>
        </div>
      </Link>
      <Button className="thumbnail-infos__btn" label="Voir l'annonce" type="outlined" />
    </article>
  );
}

ThumbnailPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
};

export default ThumbnailPreview;
