import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCategories, getPostByCategory } from '../../actions';
import Container from '../../components/Container';
import Page from '../../components/Page';
import PostsList from '../../components/PostsList';

function Category() {
  const { slug } = useParams();
  const categories = useSelector((state) => state.categories.list);
  const loading = useSelector((state) => state.categories.loading);
  const posts = useSelector((state) => state.posts.posts);

  const [error404, setError404] = useState(false);

  const dispatch = useDispatch();

  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // If there is no categories => get categories from api
    if (categories.length === 0) {
      dispatch(getCategories());
    }

    // If categories are found get id from slug and get posts from api
    if (!loading || categories.length > 0) {
      const selectedCategory = categories.find((category) => category.slug === slug);
      if (selectedCategory) {
        dispatch(getPostByCategory(selectedCategory.id));
        setCategoryName(selectedCategory.name);
      }
      else {
        setError404(true);
      }
    }
  }, [loading]);

  if (error404) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Page>
      <Container>
        <header className="section__header">
          <h1 className="section__title">Catégorie {categoryName}</h1>
        </header>
        <PostsList posts={posts} />
      </Container>
    </Page>
  );
}

export default Category;
