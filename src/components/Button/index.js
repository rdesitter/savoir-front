import PropTypes from 'prop-types';

import './style.scss';

function Button({
  label, btnstyle, isSubmit, icon,
}) {
  return (
    <button type={isSubmit ? 'submit' : 'button'} className={`button button--${btnstyle}`} title={label}>{icon ? <img src={`images/icones/${icon}.svg`} alt="null" className="button__icon" /> : ''}{label}</button>
  );
}

Button.defaultProps = {
  btnstyle: 'plain',
  icon: null,
  isSubmit: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  btnstyle: PropTypes.string,
  icon: PropTypes.string,
  isSubmit: PropTypes.bool,
};

export default Button;
