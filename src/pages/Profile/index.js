import { useEffect, useState } from 'react';
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
import PostPreview from '../../components/PostPreview';

function Profile() {
  const isAdmin = useSelector((state) => state.user.admin);
  const user = useSelector((state) => state.user.userProfil);
  const userPosts = useSelector((state) => state.posts.selectedUserPost);
  const { id } = useParams();
  // const [userProfile, setUserProfile] = useState({});
  // const [loading, setLoading] = useState(true);
  const loading = useSelector((state) => state.user.userLoading);
  const postLoading = useSelector((state) => state.posts.loadingSelectedPost);
  console.log('USERPOST', userPosts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(id));
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
            username={user.pseudo}
            avatar={user.avatar}
            created_at={user.created_at}
            about={user.description}
            id={user.id}
          />
          )}
        </Panel>
        <Panel>
            <h2 className="post-previews__title">Les annonces</h2>
              {postLoading && <div>Loading...</div>}
              {!postLoading
              && (
                <div className="post-previews">
                  {userPosts.map((userPost) => (
                      <PostPreview
                        cover={userPost.category_slug}
                        category={userPost.category_name}
                        title={userPost.title}
                        created_at={userPost.created_at}
                        id={userPost.id}
                        key={userPost.id}
                      />
                  ))}
                </div>
              )}
          
        </Panel>
      </Container>
    </Page>
  );
}

export default Profile;
