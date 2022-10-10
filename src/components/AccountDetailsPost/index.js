import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Panel from '../Panel';

import './style.scss';

function AccountDetailsPost({
  id,
  avatar,
  name,
  createdAt,
  email,
}) {
  // condition logged
  const isLogged = useSelector((state) => state.user.logged);
  // const user = useSelector((state) => state.posts.selectedUserPost);

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

  return (
    <article className="user-informations">
      <Panel>
        <div className="div-panel">
          <section className="user-infos__avatar">
            <a href={`/profil/${id}`}><img className="user-infos__avatar-img" src={`/images/avatars/${avatar}.png`} alt="avatar" /></a>
          </section>
          <section className="user-infos">
            <h2 className="user-infos__name">{name}</h2>
            <span className="user-infos__date">inscrit(e) depuis le {createdAt}</span>
            {btnVisible && (
            <Button label="Contacter" onClick={handleClick} type="button" btnstyle="outlined" title="Contacter" />
            )}
            {isLogged && (
              <div className="email-user">
                  {isVisible && (
                    <div className="user-infos__contact-btn">
                      <p className="email"><a href={`mailto:${email}`} title={`envoyer un mail à ${name}`}>{email}</a></p>
                        {!copy && (
                        <button className="user-infos__copy" type="button" title="copier" onClick={handleCopy}>Copier</button>
                        )}
                        {copy && (
                        <button className="user-infos__copy-ok" type="button" title="copié">Copié !</button>
                        )}
                    </div>
                  )}
              </div>
            )}
            {!isLogged && (
              <div>
                {isVisible && (
                <Link to="/connexion">
                  <Button label="Connexion" />
                </Link>
                )}
              </div>
            )}
          </section>
        </div>
      </Panel>
      {isLogged && (
        <div>
          {isVisible && (
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
        </div>

      )}

    </article>
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
