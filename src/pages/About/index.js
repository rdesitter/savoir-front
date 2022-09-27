/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Panel from '../../components/Panel';
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
            <p>
              <em>Transmission du savoir</em> a pour objectif de créer du lien social ou de révéler de nouvelles vocations par la mise en avant des connaissances de chacun-e.
            </p>
            <p>
              Notre société évolue&nbsp;: la population vieillit, la précarité et l'isolement augmentent.
            </p>
            <p>
              Contrairement à nos voisins méditerranéens, nous sommes moins attachés au sort de nos aînés, que ce soit dans les cercles familiaux (isolement des séniors) ou dans le milieu professionnel (difficulté à trouver un emploi, manque d'importance accordée à l'expérience). <br />
              Ainsi, pour beaucoup, le départ à la retraite est synonyme de déprime (perte de statut social, diminution des contacts sociaux, recherche de sens...).
            </p>
            <p>
              La crise sanitaire fut un facteur aggravant de ce sentiment d'isolement, non seulement à cause des restrictions mises en place à ce moment-là mais également en raison des craintes de chacun-e.<br />
              Cela a cependant permis le développement et la mise en avant de technologies telles que les visioconférences et le format télétravail/téléprésentiel.
            </p>
            <p>
              Partant de ce constat, l'idée est venue de proposer une plateforme de mise en avant de l'expérience de nos aînés. <br />
              Et pour aller plus loin, pourquoi ne pas étendre cette opportunité à toutes et à toutes&nbsp;?
            </p>
            <p>
              Nous vous offrons la possibilité d'apprendre et de partager gratuitement vos savoirs à travers une plateforme qui se veut la plus accessible et inclusive possible.
            </p>
          </Panel>
          <Panel>
            <h2>Pour aller plus loin...</h2>
            <Link to="/equipe">
              <Button label="Découvrez notre belle équipe&nbsp;!" btnstyle="outlined" />
            </Link>
            <Link to="/rechercher">
              <Button label="Faite votre première recherche&nbsp;!" btnstyle="outlined" />
            </Link>
          </Panel>
        </section>
      </Container>
    </Page>
  );
}

export default About;
