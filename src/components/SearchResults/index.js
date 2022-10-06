import { useSelector } from 'react-redux';
import Panel from '../Panel';
import Thumbnail from '../Thumbnail';

import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);
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

  return (
    <Panel>
      <Thumbnail list={displayResults} title={message} />
    </Panel>
  );
}

export default SearchResults;
