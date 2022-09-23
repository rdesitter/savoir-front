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
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />

            <TeamMember
              name="Benoit"
              teamrole="Scrum Master"
              desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              avatar="BEARD1"
              github="https://github.com/#"
              linkedin="https://linkedin.com/#"
            />
          </div>
        </section>
      </Container>
    </Page>
  );
}

export default Team;
