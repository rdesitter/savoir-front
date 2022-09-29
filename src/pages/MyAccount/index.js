/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import AccountDetails from '../../components/Accountdetails';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import PersonalInfo from '../../components/PersonalInfo';
import UserPosts from '../../components/UserPosts';
import './style.scss';

function MyAccount() {
  const user = useSelector((state) => state.user);
  return (
    <Page id="mon-compte">
      <Container>
        <Panel id="profil">
          <AccountDetails
            username={user.username}
            avatar={user.avatar}
            created_at={user.created_at}
            about={user.about}
            id={user.userId}
          />
        </Panel>
        <Panel id="mes-annonces">
          <UserPosts posts={user.posts} title="Mes annonces" isOwner />
        </Panel>
        <Panel id="info-personnelles">
          <PersonalInfo
            email={user.email}
            firstname={user.firstname || 'non renseigné'}
            lastname={user.lasname || 'non renseigné'}
            birthdate={user.birthdate}
            postalCode={user.postalCode || 'non renseigné'}
            pronoun={user.pronoun || 'non renseigné'}
          />
        </Panel>
      </Container>
    </Page>
  );
}

export default MyAccount;
