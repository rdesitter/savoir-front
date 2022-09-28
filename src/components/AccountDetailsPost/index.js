import PropTypes from 'prop-types';

import Panel from '../Panel';
import Button from '../Button';

import './style.scss';

function AccountDetailsPost({ avatar, name, createdAt }) {
  return (
    <article className="user-informations">
      <Panel>
        <div className="div-panel">
          <section className="user-infos__avatar">
            <img className="user-infos__avatar-img" src={`./images/avatars/${avatar}.png`} alt="avatar" />
          </section>
          <section className="user-infos">
            <h2 className="user-infos__name">{name}</h2>
            <span className="user-infos__date">inscrit(e) depuis le {createdAt}</span>
            <Button type="button" className="user-infos__contact" label="Contacter" />
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
