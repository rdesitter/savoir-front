import { useSelector } from 'react-redux';
import Panel from '../Panel';
// import ThumbnailPreview from '../Thumbnail/ThumbnailPreview';
import Thumbnail from '../Thumbnail';

import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);

  return (
    <Panel>
      <div className="thumbnails">
        <h2 className="thumbnails__title">Résultats de la recherche</h2>
      </div>
      <Thumbnail list={displayResults} />
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
