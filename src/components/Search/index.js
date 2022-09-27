import { useDispatch, useSelector } from 'react-redux';
import { launchSearch } from '../../actions';

import Panel from '../Panel';

import './style.scss';

function Search() {
  const categories = useSelector((state) => state.categories.list);

  // action de la soumission du formulaire
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(launchSearch(event.target.category.value, event.target.learnOrShare.value));
  };
  return (
    <Panel className="search">
      <form onSubmit={handleSubmit}>
        <fieldset>

          <legend className="search__title">Recherche rapide</legend>
          <div className="search__all-sections">

            {/* Search 1st step */}
            <div className="search__choices">
              <div className="search__choices__legend">
                <div className="search__choices__circle"><span className="search__choices__circle__order">1</span></div>
                <label htmlFor="select__learn-or-share">Souhaitez vous apprendre ou partager&nbsp;?</label>
              </div>
              <select name="learnOrShare" id="select__learn-or-share" className="search__choices__select">
                <option value="">Choisissez une option...</option>
                <option value="Apprendre">Apprendre</option>
                <option value="Partager">Partager</option>
              </select>
            </div>

            {/* Search step 2 */}
            <div className="search__choices">
              <div className="search__choices__legend">
                <div className="search__choices__circle"><span className="search__choices__circle__order">2</span></div>
                <label htmlFor="select__category">Quelle catégorie vous intéresse&nbsp;?</label>
              </div>
              <select name="category" id="select__category" className="search__choices__select">
                <option value="">Choisissez une catégorie...</option>
                {categories.map((category) => (
                  <option value={category} key={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Search step 3 */}
            <div className="search__launch">
              <div className="search__launch__legend">
                <div className="search__choices__circle"><span className="search__choices__circle__order">3</span></div>
                <span>Lancez votre recherche</span>
              </div>
              <button type="submit" className="search__launch__button">Rechercher</button>
            </div>
          </div>

        </fieldset>
      </form>
    </Panel>
  );
}

export default Search;
