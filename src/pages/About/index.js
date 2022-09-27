/* eslint-disable max-len */
import Page from '../../components/Page';
import Container from '../../components/Container';
import './style.scss';

function About() {
  return (
    <Page>
      <Container maxWidth="500px">
        <section>
          <header>
            <h1 className="about__title">A propos...</h1>
          </header>
          <p>
            Transmission du savoir a pour objectif de créer du lien social ou de révéler de nouvelles vocations par la mise en avant des connaissances de chacun.
          </p>
          <p>
            Notre société évolue&nbsp;: la population vieillit, la précarité et l'isolement augmentent.
          </p>
          <p>
            Contrairement à nos voisins méditerranéens, nous sommes moins attachés au sort de nos aînés. <br />
            Que ce soit dans les cercles familiaux (isolement des séniors) ou dans le milieu professionnel (difficulté à trouver un emploi, manque d'importance accordé à l'expérience). <br />
            Pour beaucoup le départ à la retraite est synonyme de blues (perte de statut social, réduction des contacts sociaux, recherche de sens).
          </p>
          <p>
            La crise sanitaire fut un facteur aggravant en termes d'isolement. D'une part à cause des restrictions mises en place à ce moment-là et également par les craintes de chacun-e.<br />
            Cela a cependant permis le développement et la mise en avant de technologie telles que les visios et formats télétravail/téléprésentiel.
          </p>
          <p>
            Partant de ce constat, l'idée est venue de proposer une plateforme de mise en avant de l'expérience de nos aînés.
          </p>
          <p>
            Pour aller plus loin, pourquoi ne pas offrir cette possibilité à tout le monde&nbsp;?
          </p>
          <p>
            Nous offrons la possibilité d'apprendre gratuitement à travers une plateforme qui se veut la plus accessible et inclusive possible.
          </p>
          <p>
            Nous avons par conséquent choisi de mettre l’accessibilité au cœur de nos réflexions.
          </p>
        </section>
      </Container>
    </Page>
  );
}

export default About;
