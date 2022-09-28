import { useState } from 'react';
import Button from '../Button';
import Panel from '../Panel';
import ThumbnailPreview from '../Thumbnail/ThumbnailPreview';
import './style.scss';

function PostsList() {
  const [isLearn, setIsLearn] = useState(true);
  /*
    TODO :
    - requete ajax pour récupérer les annonces BACK
    - les enregistrer dans le state search
    - gérer l'affichage dans posts-list
    - gérer le bouton charger plus
  */

  return (
    <>
      <div className="tab">
        <button title="Afficher les annonces de partage" className={isLearn ? 'tab__btn tab__btn--active' : 'tab__btn'} type="button" onClick={() => setIsLearn(true)}>
          Les annonces de partage
        </button>
        <button title="Afficher les annonces de recherche" className={!isLearn ? 'tab__btn tab__btn--active' : 'tab__btn'} type="button" onClick={() => setIsLearn(false)}>
          Les annonces de recherche
        </button>
      </div>
      <Panel style={{ marginTop: 0 }}>
        <header>
          <h1 className="section__title">{isLearn ? 'Ils vous proposent' : 'Ils ont besoin de vous'}</h1>
        </header>
        <div className="posts-list">
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
          <ThumbnailPreview
            avatar="NOHAIR1"
            name="Michel"
            userId={4578}
            category="cuisine"
            postId={79663}
            title="Cuisiner la choucroute"
            postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
          />
        </div>
        <Button label="Charger plus d'annonces" />
      </Panel>
    </>
  );
}

export default PostsList;
