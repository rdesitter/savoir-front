import PropTypes from 'prop-types';

import Panel from '../Panel';

import './style.scss';

function MorePostInfos({ info }) {
  return (
    <article className="more-infos">
      <Panel>
        <div className="informations-bloc">
          <h3 className="more-infos__title">Informations complémentaires</h3>
          <ul className="more-infos__list">
            <li className="more-infos__li"><img className="more-infos__icone" src="./images/icones/delete.svg" alt="null" />{info}</li>
          </ul>
        </div>
      </Panel>
    </article>
  );
}

MorePostInfos.propTypes = {
  info: PropTypes.string.isRequired,
};

export default MorePostInfos;
