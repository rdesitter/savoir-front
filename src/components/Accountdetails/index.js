/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import variables from '../../styles/variables.module.scss';
import './style.scss';
import { logOut } from '../../actions';
import rectifyFormat from '../../selectors/rectifyFormat';

function AccountDetails({
  id, username, avatar, created_at, about,
}) {
  const userId = useSelector((state) => state.user.userId);
  const logged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { space20, redColor } = variables;

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  const date = rectifyFormat(created_at);

  return (
    <div className="account">
      <div className="account__avatar">
        <img className="account__avatar__img" src={`/images/avatars/${avatar}.png`} alt={avatar} />
      </div>
      <div className="account__info">
        <h2 className="account__title">{username}</h2>
        <p className="account__creation">Inscrit depuis le {date}</p>
        <h3 className="account__title">Description</h3>
        <p className="account__about">{about}</p>
        <span className="spacer" />
        {logged && userId === id && (
          <>
            <Button label="Modifier mon profil public" style={{ marginBottom: space20 }} btnstyle="outlined" />
            <Button label="Me déconnecter" style={{ backgroundColor: redColor }} onClick={handleLogOut} />
          </>
        )}
      </div>
    </div>
  );
}

AccountDetails.defaultProps = {
  about: '',
  avatar: 'null',
};

AccountDetails.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  about: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default AccountDetails;