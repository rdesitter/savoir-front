import Search from 'src/components/Search';
import Container from '../../components/Container';
import Page from '../../components/Page';
import SearchResult from '../../components/SearchResults';
// import data from '../../data/posts';

function SearchPage() {
  return (
    <Page>
      <Container>
        <Search id="rechercher" />
        <SearchResult />
      </Container>
    </Page>
  );
}

export default SearchPage;
