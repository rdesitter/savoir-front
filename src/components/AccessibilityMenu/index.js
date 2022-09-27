/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuContext, menus } from '../../contexts/menu-context';

import './style.scss';

function AccessibilityMenu() {
  const [menusItems, setMenuItems] = useState(menus.home);
  const location = useLocation();
  useEffect(() => {
    // Focus .a11y-nav on location change to display accessibility menu when tab is pressed
    document.querySelector('.a11y-nav').focus();

    // TODO add accessibility menus depending on location pathname -> src/contexts/menu-context
    const url = location.pathname;
    switch (url) {
      case '/':
        setMenuItems(menus.home);
        break;
      case '/mon-compte':
        setMenuItems(menus.myAccount);
        break;
      case '/recherche':
        setMenuItems(menus.search);
        break;
      default:
        setMenuItems(menus.default);
        break;
    }
  }, [location]);
  return (
    <MenuContext.Provider value={menus}>
      <nav>
        <ul className="a11y-nav" tabIndex={0}>
          {menusItems.map((menu) => (
            <li key={menu.url}>
              <Link to={`${location.pathname}${menu.url}`} className="a11y-nav__link">{menu.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </MenuContext.Provider>
  );
}

export default AccessibilityMenu;
