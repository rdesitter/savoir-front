import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

function PersonalInfo({
  firstname, lastname, birthdate, postalCode, pronoun,
}) {
  return (
    <>
      <header>
        <h2 className="section__title">Informations personnelles</h2>
        <h2 className="section__subtitle">Ces informations sont strictement confidentielles et nous servent à vous contacter ou à personnaliser votre interface.</h2>
      </header>
      <ul className="perso-infos__list">
        <li className="perso-infos__item"><span className="perso-infos__label">Nom :</span>{lastname}</li>
        <li className="perso-infos__item"><span className="perso-infos__label">Prénom :</span>{firstname}</li>
        <li className="perso-infos__item"><span className="perso-infos__label">Date de naissance :</span>{birthdate}</li>
        <li className="perso-infos__item"><span className="perso-infos__label">Code postal :</span>{postalCode}</li>
        <li className="perso-infos__item"><span className="perso-infos__label">Pronom :</span>{pronoun}</li>
      </ul>
      <Button label="Modifier mes informations personnelles" btnstyle="outlined" />
    </>
  );
}

PersonalInfo.defaultProps = {
  firstname: '',
  lastname: '',
  postalCode: '',
  pronoun: '',
};

PersonalInfo.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  birthdate: PropTypes.string.isRequired,
  postalCode: PropTypes.string,
  pronoun: PropTypes.string,
};

export default PersonalInfo;