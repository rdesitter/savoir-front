import { useSelector } from 'react-redux';
import Page from 'src/components/Page';
import Search from 'src/components/Search';
import Container from 'src/components/Container';
import Panel from '../../components/Panel';
import Thumbnail from '../../components/Thumbnail';
import Hero from '../../components/Hero';

function Home() {
  const listOfCategories = useSelector((state) => state.categories.list);
  return (
    <Page>
      <Hero />
      <Container>
        <Search
          categories={listOfCategories}
        />
        <Panel>
          <Thumbnail />
        </Panel>
        <Panel>
          <Thumbnail />
        </Panel>
      </Container>
    </Page>
  );
}

export default Home;
