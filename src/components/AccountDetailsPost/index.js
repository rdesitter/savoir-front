import PropTypes from 'prop-types';

import { useState } from 'react';
import Panel from '../Panel';

import './style.scss';

function AccountDetailsPost({ avatar, name, createdAt }) {
  // handleClick mail
  const [isVisible, setIsVisible] = useState(false);

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
            <button onClick={() => setIsVisible(true)} type="button" className="user-infos__contact" title="Contacter">Contacter</button>
            {isVisible && (
              <div className="user-infos__contact-btn">
                <a href="mailto:jeanne-du-33@mail.com">jeanne-du-33@mail.com</a>
                <button className="user-infos__copy" type="button" title="copier">Copier</button>
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
};

export default AccountDetailsPost;
