import PropTypes from 'prop-types';

import './style.scss';

function Label({ label, color }) {
  return (
    <button type="button" className="label" title={`vers ${label}`} name={`catégorie : ${label}`} style={{ backgroundColor: `${color}` }}>{label}</button>
  );
}
Label.defaultProps = {
  color: 'white',
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Label;
