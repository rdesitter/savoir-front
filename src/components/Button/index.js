import PropTypes from 'prop-types';

import './style.scss';

function Button({ label, type, icon }) {
  return (
    <button type="button" className={`button button--${type}`} title={label}>{icon ? <img src={`images/icones/${icon}.svg`} alt="null" className="button__icon" /> : ''}{label}</button>
  );
}

Button.defaultProps = {
  type: 'plain',
  icon: null,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
