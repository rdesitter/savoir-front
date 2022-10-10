import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import variables from '../../styles/variables.modules.scss';
import Button from '../Button';
import Logo from '../Logo';
import searchIcon from './search.svg';
import variables from '../../styles/variables.module.scss';
import { logOut } from '../../actions';

import './style.scss';

function AppHeader() {
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redColor } = variables;

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
            <Link to="/mon-compte" className="main-nav__link">
              <Button label="Mon compte" icon="profil" />
            </Link>
            <Link to="/" className="main-nav__link">
              <Button label="Me déconnecter" style={{ backgroundColor: redColor }} onClick={handleLogOut} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default AppHeader;
