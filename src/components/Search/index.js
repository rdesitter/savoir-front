import PropTypes from 'prop-types';
import Panel from '../Panel';
import './style.scss';

function Search({ categories }) {
  return (
    <Panel className="search">
      <form>
        <fieldset>

          <legend className="search-title">Recherche rapide</legend>
          <div className="search-box">

            {/* Search 1st step */}
            <div className="search-choice">
              <div className="search-choice__box">
                <div className="search-circle"><span className="search-circle__order">1</span></div>
                <label htmlFor="select-learn-share" className="search-text">Souhaitez vous apprendre ou partager&nbsp;?</label>
              </div>
              <select name="selection" id="select-learn-share" className="search-choice__select">
                <option value="">Choisissez une option...</option>
                <option value="Apprendre">Apprendre</option>
                <option value="Partager">Partager</option>
              </select>
            </div>

            {/* Search step 2 */}
            <div className="search-choice">
              <div className="search-choice__box">
                <div className="search-circle"><span className="search-circle__order">2</span></div>
                <label htmlFor="select-category" className="search-text">Quelle catégorie vous intéresse&nbsp;?</label>
              </div>
              <select name="selection" id="select-category" className="search-choice__select">
                <option value="">Choisissez une catégorie...</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Search step 3 */}
            <div className="search-launch">
              <div className="search-launch__box">
                <div className="search-circle"><span className="search-circle__order">3</span></div>
                <span className="search-text">Lancez votre recherche</span>
              </div>
              <button type="submit" className="search-launch__button">Rechercher</button>
            </div>
          </div>

        </fieldset>
      </form>
    </Panel>
  );
}

Search.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Search;
