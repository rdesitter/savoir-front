import PropTypes from 'prop-types';

import './style.scss';

function Button({ label, type }) {
  return (
    <button type="button" className={`button button--${type}`} title={label}>{label}</button>
  );
}

Button.defaultProps = {
  type: 'plain',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
