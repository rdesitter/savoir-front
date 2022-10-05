// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import OneSearchResult from './OneSearchResult';
import { getPostsResults } from '../../actions';
import './style.scss';

function SearchResults() {
  const displayResults = useSelector((state) => state.search.results);
  console.log('mes résultats', displayResults);
  const loading = useSelector((state) => state.search.resultsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsResults());
  }, []);

  return (
    <>
      <div className="thumbnails-type">
        <h2 className="thumbnails-type__title">Résultats de la recherche</h2>
      </div>
      {loading && <div>Loading...</div>}
      {!loading
          && (
          <div className="thumbnails">
            {displayResults.map((post) => (
              <OneSearchResult
                key={post.id}
                avatar={post.user.avatar}
                name={post.user.username}
                userId={post.user.userId}
                category={post.category}
                postId={post.id}
                title={post.title}
              />
            ))}
          </div>
          )}
    </>
  );
}

// SearchResults.defaultProps = {
//   results: [],
// };

// SearchResults.propTypes = {
//   results: PropTypes.array,
// };

export default SearchResults;
