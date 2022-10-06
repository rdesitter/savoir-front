import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AccountDetails from '../../components/Accountdetails';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Panel from '../../components/Panel';
import PostPreview from '../../components/PostPreview';
import { getUsers } from '../../actions';
import './style.scss';

function Profile() {
  const isAdmin = useSelector((state) => state.user.admin);
  const user = useSelector((state) => state.user.userProfil);
  console.log(user);
  const userPosts = useSelector((state) => state.posts.selectedUserPost);
  const { id } = useParams();
  const loading = useSelector((state) => state.user.userLoading);
  const postLoading = useSelector((state) => state.posts.loadingSelectedPost);
  const isLogged = useSelector((state) => state.user.logged);
  // handleClick mail
  const [isVisible, setIsVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(true);
    setBtnVisible(false);
  };

  // btn copy
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(user.email);
    setCopy(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(id));
  }, []);

  return (
    <Page id="profil">
      <Container>
        <Panel>
          {loading && <div>Loading...</div>}
          {!loading
          && (
          <>
            <div className="user-infos">
              <AccountDetails
                username={user.pseudo}
                avatar={user.avatar}
                created_at={user.created_at}
                about={user.description}
                id={user.id}
              />
            </div>
            <div className="user-infos__contact">
              {isAdmin && (
                <Button label="Supprimer cet utilisateur" style={{ backgroundColor: 'red' }} />
              )}
              {btnVisible && (
                <Button label="Contacter" onClick={handleClick} type="button" title="Contacter" btnstyle="outlined" />
              )}
              {isLogged && (
              <div>
                {isVisible && (
                <div className="user-infos__contact-btn">
                  <a type="text" id="inputText" className="user-infos__mail" href={`mailto:${user.email}`} title={`envoyer un mail à ${user.pseudo}`}>{user.email}</a>
                  {!copy && (
                  <button className="user-infos__copy" type="button" title="copier" onClick={handleCopy}>Copier</button>
                  )}
                  {copy && (
                  <button className="user-infos__copy-ok" type="button" title="copié">Copié !</button>
                  )}
                </div>
                )}
              </div>
              )}
              {!isLogged && (
              <div>
                {isVisible && (
                <Link to="/connexion">
                  <Button label="Connexion" />
                </Link>
                )}
              </div>
              )}
            </div>
          </>
          )}

        </Panel>
        <Panel>
          {postLoading && <div>Loading...</div>}
          <h2 className="post-previews__title">Les annonces de {user.pseudo}</h2>
          {!postLoading
          && (
          <div className="thumbnails__list">
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
