import { useSelector } from 'react-redux';
import Panel from '../Panel';
// import ThumbnailPreview from '../Thumbnail/ThumbnailPreview';
import Thumbnail from '../Thumbnail';

import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);
  const resultsCount = displayResults.length;
  // console.log('mon comptage', resultsCount);
  let message = '';
  if (resultsCount > 1) {
    message = `Votre recherche a donné ${resultsCount} résultats`;
  }
  else if (resultsCount === 1) {
    message = `Votre recherche a donné ${resultsCount} résultat`;
  }
  else {
    message = 'Votre recherche n\'a donné aucun résultat';
  }

  return (
    <Panel>
      <Thumbnail list={displayResults} title={message} />
      {/* <div className="thumbnails">
        {displayResults.map((post) => (
          <ThumbnailPreview
            key={post.id}
            avatar="Toto"
            name="Tata"
            category="Bidon"
            title={post.title}
            userId={post.user_id}
            postId={post.id}
          />
        ))}
      </div> */}
    </Panel>
  );
}

export default SearchResults;
