/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import AccountDetails from '../../components/Accountdetails';
import Container from '../../components/Container';
import MyAccountPanel from '../../components/MyAccountPanel';
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
        <div id="profil">
          <AccountDetails
            username={user.username}
            avatar={user.avatar}
            created_at={user.created_at || ''}
            about={user.description || 'Non renseignée'}
            id={user.userId}
          />
        </div>
        <Panel id="mes-annonces">
          <UserPosts posts={user.posts} title="Mes annonces" isOwner />
        </Panel>
        <Panel id="info-personnelles">
          <PersonalInfo
            firstname={user.firstname || 'non renseigné'}
            lastname={user.lasname || 'non renseigné'}
            birthdate={user.birthdate}
            postalCode={user.postalCode || 'non renseigné'}
            pronoun={user.pronoun || 'non renseigné'}
          />
        </Panel>
        <Panel>
          <MyAccountPanel email={user.email} />
        </Panel>
      </Container>
    </Page>
  );
}

export default MyAccount;
