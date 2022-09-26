import Page from '../Page';
import Panel from '../Panel';

import './style.scss';

function Search() {
  return (
    <Page>
      <Panel className="search">
        <h2 className="search-title">Recherche rapide</h2>
        <div className="search-box">
          <div className="search-choice">
            <div className="search-circle"><span className="search-circle__order">1</span></div>
            <span className="search-text">Souhaitez-vous apprendre ou partager&nbsp;?</span>
          </div>
          <div className="search-choice">
            <div className="search-circle"><span className="search-circle__order">2</span></div>
            <span className="search-text">Quelle catégorie vous intéresse le plus&nbsp;?</span>
          </div>
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
