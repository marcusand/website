// import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './menuItem';
import userIcon from '../images/icon.png';
import '../styles/menu.scss';

const Menu = () => (
  <div className="menu">
    <header>
      <img className="user-icon" src={userIcon} />
      <span className="user-name">Marcus Schreiter</span>
    </header>
    <section>
      <div className="menu-left">
        <MenuItem title="About"/>
        <MenuItem title="CV"/>
        <MenuItem title="Work"/>
        <MenuItem title="Contact"/>
        <MenuItem title="Hallohallo"/>
      </div>
      <div className="menu-right">
      </div>
    </section>
    <footer>
    </footer>
  </div>
);

Menu.propTypes = {
};

Menu.defaultProps = {
};

export default Menu;
