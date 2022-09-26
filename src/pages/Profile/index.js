import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AccountDetails from '../../components/Accountdetails';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import UserPosts from '../../components/UserPosts';
import getUSerProfile from '../../selectors/getUserProfile';
import './style.scss';

function Profile() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUSerProfile(id);
    setUserProfile(user);
    setLoading(false);
  }, []);

  return (
    <Page id="profil">
      <Container>
        <Panel>
          {loading && <div>Loading...</div>}
          {!loading
          && (
            <AccountDetails
              username={userProfile.username}
              avatar={userProfile.avatar}
              created_at={userProfile.created_at}
              about={userProfile.about}
              id={userProfile.id}
            />
          )}
        </Panel>
        <Panel>
          <UserPosts posts={userProfile.posts} title={`Les annonces de ${userProfile.username}`} />
        </Panel>
      </Container>
    </Page>
  );
}

export default Profile;
