import PropTypes from 'prop-types';
import Panel from '../Panel';

import './style.scss';

function PostDetails({
  title,
  localisation,
  description,
  category,
}) {
  return (
    <article className="post-infos">
      <Panel>
        <section className="post-infos__frame">
          <img className="post-infos__img" src={`/images/categories/${category}.jpg`} alt="informatique" />
        </section>
        <section className="post-informations">
          <h2 className="post-infos__title">{title}</h2>
          <span className="post-infos__location"><img className="post-infos__location-icone" src="/images/icones/location.svg" alt="location icone" />{localisation}</span>
          <p className="post-infos__description">{description}</p>
        </section>

      </Panel>
    </article>
  );
}

PostDetails.propTypes = {
  title: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostDetails;
