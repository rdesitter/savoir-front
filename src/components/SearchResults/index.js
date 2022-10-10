import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Panel from '../Panel';
import Thumbnail from '../Thumbnail';
import Loading from '../Loading';

import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);
  const loading = useSelector((state) => state.search.loading);
  const resultsCount = displayResults.length;

  let message = '';
  if (resultsCount > 1) {
    message = `Votre recherche a donné ${resultsCount} résultats`;
  }
  else if (resultsCount === 1) {
    message = `Votre recherche a donné ${resultsCount} résultat`;
  }
  else if (resultsCount === 0) {
    message = 'Votre recherche n\'a donné aucun résultat';
  }
  else {
    message = 'Veuillez faire une recherche';
  }

  useEffect(() => {
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Panel>
      <Thumbnail list={displayResults} title={message} />
    </Panel>
  );
}

export default SearchResults;
