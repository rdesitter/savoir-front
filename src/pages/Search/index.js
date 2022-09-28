import Search from 'src/components/Search';
import Container from '../../components/Container';
import Page from '../../components/Page';

function SearchPage() {
  return (
    <Page>
      <Container>
        <Search id="rechercher" />
      </Container>
    </Page>
  );
}

export default SearchPage;
