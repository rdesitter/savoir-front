import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
import { getSelectedPost } from '../../actions';

function Annonce() {
  useScrollTop();
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.user.admin);
  useEffect(() => {
    dispatch(getSelectedPost());
  }, []);
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  dispatch({
    type: 'GET_SELECTED_POST',
    id,
  });

  // console.log('SELECTEDPOST', selectedPost[0].category);

  return (
    <Page>
      <Container>
        <div className="informations">
          <section className="post-infos__label">
            <Label label="informatique" />
            <Label label="rencontre" />
          </section>
          <p className="post-infos__date">Annonce publiée le {selectedPost[0].createdAt}</p>
          {isAdmin && (
            <Button label="Supprimer cette annonce" style={{ backgroundColor: 'red' }} />
          )}
          <div className="global-infos">
            <PostDetails
              title={selectedPost[0].title}
              localisation={selectedPost[0].location}
              description={selectedPost[0].description}
            />
            <div className="vignettes">
              <MorePostInfos info="Animaux acceptés" />

              <AccountDetailsPost
                avatar={selectedPost[0].user.avatar}
                name={selectedPost[0].user.username}
                createdAt={selectedPost[0].user.createdAt}
                email={selectedPost[0].user.email}
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
