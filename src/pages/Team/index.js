import Page from 'src/components/Page';
import Container from '../../components/Container';
import TeamMember from '../../components/TeamMember';

import './style.scss';

function Team() {
  return (
    <Page>
      <Container>
        <section className="section">
          <header className="section__header">
            <h1 className="section__title">L'équipe du site</h1>
          </header>
          <div className="team">
            <TeamMember
              name="Alizéa"
              teamrole="Lead dev backend"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="LONG2"
              github="https://github.com/Alizea-Masse"
              linkedin="https://www.linkedin.com/in/alizéamassé/"
            />

            <TeamMember
              name="Séverine"
              teamrole="Référente accessibilité"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD2"
              github="https://github.com/#"
              linkedin="https://www.linkedin.com/in/benoit-castang-802332117/"
            />

            <TeamMember
              name="Raphaël"
              teamrole="Lead dev front-end"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Cécile"
              teamrole="Product owner"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="LONG1"
              github="https://github.com/#"
              linkedin="https://www.linkedin.com/in/cecilebonnindevweb/"
            />
          </div>
        </section>
      </Container>
    </Page>
  );
}

export default Team;
