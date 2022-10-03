import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AccountDetails from '../../components/Accountdetails';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import UserPosts from '../../components/UserPosts';
import getUSerProfile from '../../selectors/getUserProfile';
import './style.scss';

function Profile() {
  const isAdmin = useSelector((state) => state.user.admin);

  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  console.log('USER', userProfile);
  useEffect(() => {
    const user = getUSerProfile(id);
    setUserProfile(user);
    setLoading(false);
  }, []);

  return (
    <Page id="profil">
      <Container>
        {isAdmin && (
        <Button label="Supprimer cet utilisateur" style={{ backgroundColor: 'red' }} />
        )}

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
