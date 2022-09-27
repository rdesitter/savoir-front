import PropTypes from 'prop-types';
import Label from '../Label';
import Button from '../Button';

import './style.scss';

function ThumbnailPreview({
  avatar,
  name,
  category,
  title,
  postDescription,
}) {
  return (
    //! Est-ce judicieux de mettre une ul ici ? ou on reste sur une balise article ?
    <ul className="thumbnail">
      {/* TODO: route paramétrée */}
      <a href="/utilisateur/:id">
        <div className="thumbnail-user__infos">
          <div className="thumbnail-user__img">
            <img className="thumbnail-user__img__avatar" src={`./images/avatars/${avatar}.png`} alt={`profil de ${name}`} />
          </div>
          <h3 className="thumbnail-user__name">{name}</h3>
        </div>
      </a>
      <Label />
      {/* TODO: route paramétrée */}
      <a href="/annonce/:id">
        <div className="thumbnail-infos">
          <img className="thumbnail-infos__img" src={`./images/categories/${category}.jpg`} alt="Cuisine" />
          <h4 className="thumbnail-infos__title">{title}</h4>
          <p className="thumbnail-infos__description">
            {postDescription}
          </p>
        </div>
      </a>
      <Button className="thumbnail-infos__btn" label="Voir l'annonce" type="outlined" />
    </ul>
  );
}

ThumbnailPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ThumbnailPreview;
