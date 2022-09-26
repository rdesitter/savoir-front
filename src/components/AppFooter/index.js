import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__logo">
          <Link to="/">
            <Logo />
          </Link>
          <p className="footer__desc">
            Partagez ou transmettez vos savoir-faire ou connaissances gratuitement.
          </p>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <h3 className="footer-nav__title">En savoir plus</h3>
            <li className="footer-nav__item">
              <Link to="/a-propos" className="footer-nav__link">A propos</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/equipe" className="footer-nav__link">L'équipe</Link>
            </li>
          </ul>
          <ul className="footer-nav__list">
            <h3 className="footer-nav__title">Liens utiles</h3>
            <li className="footer-nav__item">
              <Link to="/CGU" className="footer-nav__link">CGU</Link>
            </li>
            <li className="footer-nav__item">
              <Link to="/politique-de-confidentialite" className="footer-nav__link">Vie privée</Link>
            </li>
          </ul>
          <ul className="footer-nav__list">
            <h3 className="footer-nav__title">Besoin d'aide ?</h3>
            <li className="footer-nav__item">
              <Link to="/a-propos" className="footer-nav__link"><Button label="Nous contacter" /></Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer__copyright">&copy; Transmition des savoirs {year}</p>
    </footer>
  );
}

export default AppFooter;
