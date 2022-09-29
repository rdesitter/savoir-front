import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Thumbnail from '../../components/Thumbnail';
import PostDetails from '../../components/PostDetails';
import AccountDetailsPost from '../../components/AccountDetailsPost';
import MorePostInfos from '../../components/MorePostInfos';
import './style.scss';

function Annonce({ createdAt }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  dispatch({
    type: 'DISPLAY_POST',
    id,
  });

  console.log(selectedPost);
  return (
    <Page>
      <Container>
        <div className="informations">
          <section className="post-infos__label">
            <Label label="informatique" />
            <Label label="rencontre" />
          </section>
          <p className="post-infos__date">Annonce publiée le {createdAt}</p>
          <div className="global-infos">
            <PostDetails
              title={selectedPost.title}
              localisation="Montpellier"
              description="J'aimerais apprendre à me servir de Gimp. Je suis totalement débutant mais
          j'ai déja installé le logiciel (je suis sur Ibook).
          J'aimerais organiser ça dans un café ou un bar. J'offre la première consommation !
          Pour info, j'ai de bonnes notions Photoshop.
          Ça serait sympa de profiter du beau temps pour organiser ça !"
            />
            <div className="vignettes">
              <MorePostInfos info="Animaux acceptés" />
              <AccountDetailsPost avatar="NOHAIR3" name="Jeanne" createdAt="20/06/2022" email="jeanne-du-12@mail.com" />
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
  createdAt: PropTypes.string.isRequired,
};

export default Annonce;
