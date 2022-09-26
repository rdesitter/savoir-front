import PropTypes from 'prop-types';
import PostPreview from '../PostPreview';

import './style.scss';

function UserPosts({ posts, title }) {
  const hasPosts = posts.length;
  return (
    <>
      { hasPosts > 0 && (
        <>
          <header className="section__header">
            <h2 className="section__title">{title}</h2>
          </header>
          <div className="posts">
            {posts.map((post) => (
              <PostPreview
                cover={post.cover}
                category={post.category}
                title={post.title}
                created_at={post.created_at}
                id={post.id}
              />
            ))}
          </div>
        </>
      )}
      {hasPosts === 0 && <p>Cette utilisateur n'a pas publié d'annonces</p> }
    </>
  );
}

UserPosts.defaultProps = {
  posts: [],
};

UserPosts.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default UserPosts;
