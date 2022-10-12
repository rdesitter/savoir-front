import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import searchIcon from './search.svg';
import { logOut } from '../../actions';

import './style.scss';

function AppHeader() {
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <nav className="main-nav" aria-label="Navigation">
      <Link to="/" className="main-nav__logo"><Logo /></Link>
      <ul className="main-nav__list">
        <li className="main-nav__item main-nav__item--search">
          <Link to="recherche" className="main-nav__link" title="Faire une recherche"><img src={searchIcon} alt="null" className="main-nav__link__icon" /> Faire une recherche</Link>
        </li>
        {!isLogged && (
          <>
            <li className="main-nav__item">
              <Link to="/connexion" className="main-nav__link">
                <Button label="Se connecter" btnstyle="outlined" />
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--signup">
              <Link to="/inscription" className="main-nav__link">
                <Button label="S'inscrire" />
              </Link>
            </li>
          </>

        )}
        {isLogged && (
          <li className="main-nav__item">
            <Link to="/mon-compte" className="main-nav__link" aria-label="Aller vers mon compte">
              <Button label="Mon compte" icon="profil" />
            </Link>
            <button className="button button--logout" type="button" onClick={handleLogOut} title="Se déconnecter">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default AppHeader;
