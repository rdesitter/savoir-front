import { Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Button from '../../components/Button';
import ThumbnailPreview from '../../components/Thumbnail/ThumbnailPreview';
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
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  console.log(selectedPost);
  const similarPosts = useSelector((state) => state.posts.similarPosts);
  const postError = useSelector((state) => state.posts.isError);

  const [error404, setError404] = useState(false);

  useEffect(() => {
    dispatch(getSelectedPost(id));
    if (postError) {
      setError404(true);
    }
  }, [postError, id]);

  if (error404) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Page style={{ paddingBottom: 0 }}>
      {Object.keys(selectedPost).length !== 0 && (
      <Container>
        <div className="informations">
          <section className="post-infos__label">
            <Label label={selectedPost.category_name} />
            <Label label={selectedPost.type_id === 1 ? 'Présentiel' : 'Distanciel'} />
          </section>
          <p className="post-infos__date">Annonce publiée le {selectedPost.createdAt}</p>
          {isAdmin && (
          <Button label="Supprimer cette annonce" style={{ backgroundColor: 'red' }} />
          )}
          <div className="global-infos">
            <PostDetails
              title={selectedPost.title}
              localisation={selectedPost.location || ''}
              description={selectedPost.description}
              category={selectedPost.category_slug}
            />
            <div className="vignettes">
              <MorePostInfos info="Animaux acceptés" />

              <AccountDetailsPost
                id={selectedPost.user_id}
                avatar={selectedPost.picture_slug}
                name={selectedPost.user_name}
                createdAt="user created at"
                email="user email"
              />
            </div>
          </div>
        </div>
      </Container>
      )}
      {Object.keys(similarPosts).length !== 0 && (
      <section className="more-posts">
        <Container>
          <h2 className="more-posts__title">Annonces similaires</h2>
          <div className="thumbnails__list similar">
            {similarPosts.map((post) => (
              <ThumbnailPreview
                key={post.id}
                avatar={post.picture_slug}
                name={post.user_name}
                userId={post.user_id}
                category={post.category_slug}
                categoryName={post.category_name}
                postId={post.id}
                title={post.title}
              />
            ))}
          </div>
        </Container>
      </section>
      )}
    </Page>

  );
}

export default Annonce;
