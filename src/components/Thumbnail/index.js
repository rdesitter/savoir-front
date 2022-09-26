import PropTypes from 'prop-types';
import Label from '../Label';

import './style.scss';

function Thumbnail() {
  return (
    <article className="thumbnail">
      <div className="thumbnail__user__infos">
        <img className="thumbnail__user__avatar" src="./images/avatars/NOHAIR1.png" alt="Avatar" />
        <h3 className="thumbnail__user__name">Michel</h3>
      </div>
      <div className="thumbnail__infos">
        <Label />
        <img className="thumbnail__infos__img" src="./images/categories/cooking.jpg" alt="Cuisine" />
        <h4 className="thumbnail__infos__title">Titre de l'activité</h4>
        <p className="thumbnail__infos__description">
          Proposée sur plusieurs lignes si besoin
        </p>
      </div>
    </article>
  );
}

Thumbnail.propTypes = {

};

export default Thumbnail;
