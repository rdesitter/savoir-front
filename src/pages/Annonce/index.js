import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Button from '../../components/Button';
import Thumbnail from '../../components/Thumbnail';
import PostDetails from '../../components/PostDetails';
import AccountDetailsPost from '../../components/AccountDetailsPost';
import MorePostInfos from '../../components/MorePostInfos';
import './style.scss';
import useScrollTop from '../../hooks/useScrollTop';

function Annonce() {
  useScrollTop();
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.user.admin);
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  dispatch({
    type: 'DISPLAY_POST',
    id,
  });

  // console.log(selectedPost);
  return (
    <Page>
      <Container>
        <div className="informations">
          <section className="post-infos__label">
            <Label label="informatique" />
            <Label label="rencontre" />
          </section>
          <p className="post-infos__date">Annonce publiée le {selectedPost.createdAt}</p>
          {isAdmin && (
            <Button label="Supprimer cette annonce" style={{ backgroundColor: 'red' }} />
          )}
          <div className="global-infos">
            <PostDetails
              title={selectedPost.title}
              localisation={selectedPost.location}
              description={selectedPost.description}
            />
            <div className="vignettes">
              <MorePostInfos info="Animaux acceptés" />

              <AccountDetailsPost
                avatar={selectedPost.user.avatar}
                name={selectedPost.user.username}
                createdAt={selectedPost.user.createdAt}
                email={selectedPost.user.email}
              />
            </div>
          </div>
        </div>
      </Container>
      <section className="more-posts">
        <h2 className="more-posts__title">Annonces similaires</h2>
        <Thumbnail />
      </section>
    </Page>

  );
}

Annonce.propTypes = {

};

export default Annonce;
