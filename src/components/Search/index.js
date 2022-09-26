import Page from '../Page';
import Panel from '../Panel';

function Search() {
  return (
    <Page>
      <Panel>
        <h2 className="searchPanel__title">Recherche rapide</h2>
        <div>
          <div className="searchPanel__Choice">
            1 Souhaitez-vous apprendre ou partager ?
          </div>
          <div className="searchPanel__Choice">
            2 Quelle catégorie vous intéresse le plus ?
          </div>
          <div className="searchPanel__launch">
            3 Lancez votre recherche
          </div>
        </div>
      </Panel>
    </Page>
  );
}

export default Search;
