import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';
import './style.scss';

import categories from '../../data/categories';

function Categories() {
  return (
    <Page>
      <Container>
        <header className="section__header">
          <h1 className="section__title">Toutes les catégories</h1>
        </header>
        <ul className="categories__list">
          {categories.map((category) => (
            <li className="categories__item" key={category.id}>
              <Link
                to={`categories/${category.id}`}
                className="categories__link"
                title="Voir les annonces de la catégorie"
              >
                <div className="categories__icon">
                  <img
                    src={`/images/categories/${category.slug}.jpg`}
                    className="categories__img"
                    alt="null"
                  />
                </div>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Page>
  );
}

export default Categories;
