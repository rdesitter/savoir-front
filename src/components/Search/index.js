import Page from '../Page';
import Panel from '../Panel';

import './style.scss';

function Search() {
  return (
    <Page>
      <Panel className="search">
        <h2 className="search-title">Recherche rapide</h2>
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
              <div className="search-circle"><span className="search-circle__order">1</span></div>
              <label htmlFor="select-category" className="search-text">Quelle catégorie vous intéresse&nbsp;?</label>
            </div>
            <select name="selection" id="select-category" className="search-choice__select">
              <option value="">Choisissez une catégorie...</option>
              <option value="Apprendre">Apprendre</option>
              <option value="Partager">Partager</option>
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
      </Panel>
    </Page>
  );
}

export default Search;
