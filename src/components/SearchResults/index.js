import { useSelector } from 'react-redux';
import ThumbnailPreview from '../Thumbnail/ThumbnailPreview';

import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);

  return (
    <>
      <div className="thumbnails-type">
        <h2 className="thumbnails-type__title">Résultats de la recherche</h2>
      </div>
      <div className="thumbnails">
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
      </div>
    </>
  );
}

export default SearchResults;
