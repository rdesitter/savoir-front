import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AccountDetails from '../../components/Accountdetails';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import UserPosts from '../../components/UserPosts';
// import getUSerProfile from '../../selectors/getUserProfile';
import { getUsers } from '../../actions';
import './style.scss';

function Profile() {
  const isAdmin = useSelector((state) => state.user.admin);
  const user = useSelector((state) => state.user.userProfil);
  const userPosts = useSelector((state) => state.posts.selectedUserPost);
  console.log('USERPOST', userPosts);
  const { id } = useParams();
  // const [userProfile, setUserProfile] = useState({});
  // const [loading, setLoading] = useState(true);
  // console.log('USER', userProfile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(id));
    // setUserProfile(user);
    // setLoading(false);
  }, []);

  return (
    <Page id="profil">
      <Container>
        {isAdmin && (
        <Button label="Supprimer cet utilisateur" style={{ backgroundColor: 'red' }} />
        )}

        <Panel>
          {/* {loading && <div>Loading...</div>}
          {!loading
          && ( */}
          <AccountDetails
            username={user.pseudo}
            avatar={user.avatar}
            created_at={user.created_at}
            about={user.description}
            id={user.userId}
          />
          {/* )} */}
        </Panel>
        <Panel>
          <UserPosts posts={userPosts} title={`Les annonces de ${user.pseudo}`} />
        </Panel>
      </Container>
    </Page>
  );
}

export default Profile;
