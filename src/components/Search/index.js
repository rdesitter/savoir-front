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
            <span className="search-order">1</span>
            <span className="search-text">Souhaitez-vous apprendre ou partager&nbsp;?</span>
          </div>
          <div className="search-choice">
            <span className="search-order">2</span>
            <span className="search-text">Quelle catégorie vous intéresse le plus&nbsp;?</span>
          </div>
          <div className="search-launch">
            <span className="search-order">3</span>
            <span className="search-text">Lancez votre recherche</span>
          </div>
        </div>
      </Panel>
    </Page>
  );
}

export default Search;
