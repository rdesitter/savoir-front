import Page from 'src/components/Page';
import SearchPannel from 'src/components/Home/SearchPannel';
import Container from 'src/components/Container';

function Home() {
  return (
    <Page>
      <Container>
        <SearchPannel />
      </Container>
    </Page>
  );
}

export default Home;
