import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import OneSearchResult from './OneSearchResult';
import { getPostsResults } from '../../actions';
import './style.scss';

function SearchResults({ results }) {
  console.log('premier test', results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsResults());
  }, []);
  // console.log(list);

  const displayResults = useSelector((state) => state.search.results);
  console.log('mes résultats', displayResults);

  return (
    <>
      <div className="thumbnails-type">
        <h2 className="thumbnails-type__title">Résultats de la recherche</h2>
      </div>
      <div className="thumbnails">
        {results.map((post) => (
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
    </>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
