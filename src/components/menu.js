// import PropTypes from 'prop-types';
import React from 'react';
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
        item <br></br>
        item <br></br>
        item <br></br>
      </div>
      <div className="menu-right">
      item <br></br>
      item <br></br>
      item <br></br>
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
