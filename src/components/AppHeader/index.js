import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from './LOGO.svg';
import searchIcon from './search.svg';

import './style.scss';

function AppHeader() {
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <nav className="main-nav" aria-label="Navigation">
      <Link to="/" className="main-nav__logo"><img src={logo} alt="null" /></Link>
      <ul className="main-nav__list">
        <li className="main-nav__item main-nav__item--search">
          <Link to="recherche" className="main-nav__link" title="Faire une recherche"><img src={searchIcon} alt="null" className="main-nav__link__icon" /> Faire une recherche</Link>
        </li>
        {!isLogged && (
          <>
            <li className="main-nav__item">
              <Link to="/connection" className="main-nav__link">
                <Button label="Se connecter" type="outlined" />
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
          </li>
        )}
      </ul>
    </nav>
  );
}

export default AppHeader;
