import PropTypes from 'prop-types';
import Label from '../Label';
import Button from '../Button';

import './style.scss';

function Thumbnail() {
  return (
    <div className="thumbnails">
      <article className="thumbnail">
        <div className="thumbnail__user__infos">
          <div className="thumbnail__user__img">
            <img className="thumbnail__user__img__avatar" src="./images/avatars/NOHAIR1.png" alt="Avatar" />
          </div>
          <h3 className="thumbnail__user__name">Michel</h3>
        </div>
        <Label />
        <div className="thumbnail__infos">
          <img className="thumbnail__infos__img" src="./images/categories/cooking.jpg" alt="Cuisine" />
          <h4 className="thumbnail__infos__title">Titre de l'activité</h4>
          <p className="thumbnail__infos__description">
            Proposée sur plusieurs lignes si besoin
          </p>
        </div>
        <Button className="thumbnail__infos__btn" label="Voir l'annonce" type="outlined" />
      </article>
      <article className="thumbnail">
        <div className="thumbnail__user__infos">
          <div className="thumbnail__user__img">
            <img className="thumbnail__user__img__avatar" src="./images/avatars/NOHAIR1.png" alt="Avatar" />
          </div>
          <h3 className="thumbnail__user__name">Michel</h3>
        </div>
        <Label />
        <div className="thumbnail__infos">
          <img className="thumbnail__infos__img" src="./images/categories/cooking.jpg" alt="Cuisine" />
          <h4 className="thumbnail__infos__title">Titre de l'activité</h4>
          <p className="thumbnail__infos__description">
            Proposée sur plusieurs lignes si besoin
          </p>
        </div>
        <Button className="thumbnail__infos__btn" label="Voir l'annonce" type="outlined" />
      </article><article className="thumbnail">
        <div className="thumbnail__user__infos">
          <div className="thumbnail__user__img">
            <img className="thumbnail__user__img__avatar" src="./images/avatars/NOHAIR1.png" alt="Avatar" />
          </div>
          <h3 className="thumbnail__user__name">Michel</h3>
        </div>
        <Label />
        <div className="thumbnail__infos">
          <img className="thumbnail__infos__img" src="./images/categories/cooking.jpg" alt="Cuisine" />
          <h4 className="thumbnail__infos__title">Titre de l'activité</h4>
          <p className="thumbnail__infos__description">
            Proposée sur plusieurs lignes si besoin
          </p>
        </div>
        <Button className="thumbnail__infos__btn" label="Voir l'annonce" type="outlined" />
      </article>
    </div>

  );
}

Thumbnail.propTypes = {

};

export default Thumbnail;
