// import { useSelector } from 'react-redux';
import Page from 'src/components/Page';
// import Search from 'src/components/Search';
import Container from 'src/components/Container';

function Home() {
  // const listOfCategories = useSelector((state) => state.categories.list);
  return (
    <Page>
      <Container>
        Home
        {/* <Search
          categories={listOfCategories.name}
        /> */}
      </Container>
    </Page>
  );
}

export default Home;
