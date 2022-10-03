import PropTypes from 'prop-types';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Panel from '../Panel';

import './style.scss';

function AccountDetailsPost({
  avatar,
  name,
  createdAt,
  email,
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

  return (
    <article className="user-informations">
      <Panel>
        <div className="div-panel">
          <section className="user-infos__avatar">
            <img className="user-infos__avatar-img" src={`/images/avatars/${avatar}.png`} alt="avatar" />
          </section>
          <section className="user-infos">
            <h2 className="user-infos__name">{name}</h2>
            <span className="user-infos__date">inscrit(e) depuis le {createdAt}</span>
            {btnVisible && (
            <button onClick={handleClick} type="button" className="user-infos__contact" title="Contacter">Contacter</button>
            )}
            {isLogged && (
            <div>
              {isVisible && (
              <div className="user-infos__contact-btn">
                <a type="text" id="inputText" className="user-infos__mail" href={`mailto:${email}`} title={`envoyer un mail à ${name}`}>{email}</a>
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
    </article>
  );
}

AccountDetailsPost.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AccountDetailsPost;
