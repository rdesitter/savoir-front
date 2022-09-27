import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function AccessibilityMenu({ menus }) {
  return (
    <ul className="a11y-nav">
      {menus.map((menu) => (
        <li><Link to={menu.url} className="a11y-nav__link">{menu.label}</Link></li>
      ))}
    </ul>
  );
}

AccessibilityMenu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default AccessibilityMenu;
