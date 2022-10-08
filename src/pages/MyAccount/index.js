/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions';
import AccountDetails from '../../components/Accountdetails';
import Container from '../../components/Container';
import MyAccountPanel from '../../components/MyAccountPanel';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import PersonalInfo from '../../components/PersonalInfo';
import UserPosts from '../../components/UserPosts';
import './style.scss';

function MyAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const myPosts = useSelector((state) => state.posts.selectedUserPost);
  const avatar = useSelector((state) => state.user.userProfil.slug);
  useEffect(() => {
    dispatch(getUsers(user.userId));
  }, []);

  return (
    <Page id="mon-compte">
      <Container>
        <div id="profil">
          <AccountDetails
            username={user.username}
            avatar={avatar}
            created_at={user.created_at || ''}
            about={user.description || 'Non renseignée'}
            id={user.userId}
          />
        </div>
        <Panel id="mes-annonces">
          <UserPosts posts={myPosts} title="Mes annonces" isOwner />
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
