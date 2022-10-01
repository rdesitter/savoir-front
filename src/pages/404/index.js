import { Link } from 'react-router-dom';
import error from './404.svg';
import Page from '../../components/Page';
import Container from '../../components/Container';
import './style.scss';
import Panel from '../../components/Panel';
import Button from '../../components/Button';

function NotFound() {
  return (
    <Page id="error">
      <Container>
        <section className="section err404">
          <header className="section__header">
            <h1 className="err404__title">404</h1>
            <p className="err404__subtitle">
              Nous avons bien cherché mais impossible de trouver la page demandée...
            </p>
          </header>
          <Panel>
            <h2 className="section__title">Mais au fait</h2>
            <p>Savez-vous que les pingouins ont des genoux ?</p>
          </Panel>
          <div className="err404__buttons">
            <Link to="/rechercher">
              <Button label="Faire une recherche" btnstyle="outlined" />
            </Link>
            <Link to="/">
              <Button label="Retourner à l'accueil" />
            </Link>
          </div>
        </section>
      </Container>
      <img className="err404__bg" src={error} alt="error" />
    </Page>
  );
}

export default NotFound;
