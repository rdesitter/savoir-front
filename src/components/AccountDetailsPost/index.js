import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import rectifyFormat from '../../selectors/rectifyFormat';
import Button from '../Button';
import Panel from '../Panel';

import './style.scss';

function AccountDetailsPost({
  id,
  avatar,
  name,
  email,
  createdAt,
}) {
  // condition logged
  const isLogged = useSelector((state) => state.user.logged);

  // handleClick mail
  const [isVisible, setIsVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(true);
    setBtnVisible(false);
  };

  // btn copy
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);
  };

  // formatting date with selector
  const date = rectifyFormat(createdAt);

  return (
    <Panel>
      <section className="user-infos">
        <div className="user-infos__avatar">
          <a href={`/profil/${id}`}><img className="user-infos__avatar-img" src={`/images/avatars/${avatar}.png`} alt="avatar" /></a>
          <h2 className="user-infos__name">{name}</h2>
        </div>
        <span className="user-infos__date">inscrit(e) le {date}</span>
      </section>

      <section className="user-contact">
        {btnVisible && (
        <Button label="Contacter" onClick={handleClick} type="button" btnstyle="outlined" title="Contacter" />
        )}
        {(isLogged && isVisible) && (
          <div className="user-infos__contact-btn">
            <a className="email" href={`mailto:${email}`} title={`envoyer un mail à ${name}`}>{email}</a>
            {!copy && (
            <button className="user-infos__copy" type="button" title="copier" onClick={handleCopy}>Copier</button>
            )}
            {copy && (
            <button className="user-infos__copy-ok" type="button" title="copié">Copié !</button>
            )}
          </div>
        )}
        {(!isLogged && isVisible) && (
          <Link to="/connexion">
            <Button label="Connexion" />
          </Link>
        )}
      </section>
      {(isLogged && isVisible) && (
        <div className="disclaimer">
          <p className="disclaimer-text">
            <span className="disclaimer-text__span">Avertissement</span>: Vous êtes sur le point d’entrer en relation avec un utilisateur.
          </p>
          <p className="disclaimer-text">
            Veillez à ne jamais communiquer d’informations personnelles.
          </p>
          <p className="disclaimer-text">
            Si détectez le moindre comportement suspect ou ressentez le moindre doute,
            merci d’utiliser le formulaire de <a className="disclaimer-text__span-bold" href="/contact">contact</a> pour en faire part à un membre de l’équipe.
          </p>
        </div>
      )}
    </Panel>
  );
}

AccountDetailsPost.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AccountDetailsPost;
