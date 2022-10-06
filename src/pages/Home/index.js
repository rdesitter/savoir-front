import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Page from 'src/components/Page';
import Search from 'src/components/Search';
import Container from 'src/components/Container';
import Panel from '../../components/Panel';
import Thumbnail from '../../components/Thumbnail';
import Hero from '../../components/Hero';
// import fake data
// import data from '../../data/posts';
import { getPosts } from '../../actions';

function Home() {
  const isLogged = useSelector((state) => state.user.logged);
  const loading = useSelector((state) => state.posts.isLoading);
  const posts = useSelector((state) => state.posts.posts);
  
  let postsShare = [];
  let postsLearn = [];
  if (!loading) {
    console.log(posts)
    postsShare = posts.filter((post) => post.type_id === 2);
    postsLearn = posts.filter((post) => post.type_id === 1);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Page>
      {!isLogged && <Hero />}
      <Container>
        <Search />
        <Panel>
          {!loading && (
          <Thumbnail list={postsShare} title="Ils proposent" url="partage" />
          )}
        </Panel>
        <Panel>
          {!loading && (
          <Thumbnail list={postsLearn} title="Ils recherchent" url="besoin" />
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
