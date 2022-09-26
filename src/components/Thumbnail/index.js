import PropTypes from 'prop-types';
import ThumbnailPreview from './ThumbnailPreview';

import './style.scss';

function Thumbnail() {
  return (
    <div className="thumbnails">
      <ThumbnailPreview
        avatar="NOHAIR1"
        name="Michel"
        category="cooking"
        title="Cuisiner la choucroute"
        postDescription="J'aimerais apprendre à cuisine une choucroute pour mes amis."
      />
      <ThumbnailPreview
        avatar="LONG3"
        name="Bibi-du-22"
        category="cooking"
        title="Besoin d'aide nems !"
        postDescription="Est-ce que quelqu'un peut m'apprendre à rouler les nems SVP ?"
      />
      <ThumbnailPreview
        avatar="BEARD2"
        name="Paulo"
        category="cooking"
        title="Le pro de la pizza"
        postDescription="Je vous propose de vous montrer comment je fais mes pizzas"
      />
    </div>
  );
}

export default Thumbnail;
