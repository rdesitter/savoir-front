import PropTypes from 'prop-types';

import { useState } from 'react';
import Panel from '../Panel';

import './style.scss';

function AccountDetailsPost({ avatar, name, createdAt, email }) {
  // handleClick mail
  const [isVisible, setIsVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(true);
    setBtnVisible(false);
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(email);
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
            {isVisible && (
              <div className="user-infos__contact-btn">
                <a type="text" id="inputText" className="user-infos__mail" href={`mailto:${email}`} title={`envoyer un mail à ${name}`}>{email}</a>
                <button className="user-infos__copy" id="copyText" type="button" title="copier" onClick={handleCopy}>Copier</button>
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
