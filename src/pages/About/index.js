/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Button from '../../components/Button';
import './style.scss';

function About() {
  return (
    <Page>
      <Container maxWidth="500px">
        <section className="about">
          <header>
            <h1 className="about__title">A propos...</h1>
          </header>
          <Panel>
            <div className="about__intro">
              <em>Transmission du savoir</em> souhaite créer du lien social ou révéler de nouvelles vocations grâce à la mise en valeur des connaissances de chacun&#xB7;e.
            </div>
            <p>
              Notre société évolue&nbsp;: la population vieillit, la précarité et l'isolement augmentent.
            </p>
            <p>
              Contrairement à nos voisins méditerranéens, nous sommes moins attachés au sort de nos aînés&#xB7;ées, que ce soit dans les cercles familiaux (isolement des séniors) ou dans le milieu professionnel (difficulté à trouver un emploi, manque d'importance accordée à l'expérience). <br />
              Ainsi, pour beaucoup, le départ à la retraite est synonyme de déprime (perte de statut social, diminution des contacts sociaux, recherche de sens...).
            </p>
            <p>
              La crise sanitaire fut un facteur aggravant de ce sentiment d'isolement, non seulement à cause des restrictions mises en place à ce moment-là mais également en raison des craintes de chacun&#xB7;e.<br />
              Cela a cependant permis le développement et la mise en avant de technologies telles que les visioconférences et le format téléprésentiel.
            </p>
            <p>
              Partant de ce constat, l'idée est venue de proposer une plateforme valorisant l'expérience de nos aînés&#xB7;ées. <br />
              Et pour aller plus loin, pourquoi ne pas étendre cette opportunité à toutes et à tous&nbsp;?
            </p>
            <p>
              Nous vous offrons la possibilité d'apprendre et de partager gratuitement vos savoirs à travers un site qui se veut le plus accessible et inclusif possible.
            </p>
          </Panel>
          <Panel>
            <header>
              <h2 className="about__subtitle">Pour aller plus loin...</h2>
            </header>
            <div className="about__buttons">
              <Link to="/equipe" className="about__link">
                <Button type="button" label="Découvrez notre belle équipe&nbsp;!" style={{ width: '100%' }} />
              </Link>
              <Link to="/rechercher" className="about__link">
                <Button type="button" label="Faites votre première recherche&nbsp;!" style={{ width: '100%' }} />
              </Link>
              <Link to="/" className="about__link">
                <Button type="button" label="Retourner à l'accueil" style={{ width: '100%' }} />
              </Link>
            </div>
          </Panel>
        </section>
      </Container>
    </Page>
  );
}

export default About;
