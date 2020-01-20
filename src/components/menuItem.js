import PropTypes from 'prop-types';
import React from 'react';
import defaultIcon from '../images/icon.png';
import '../styles/menuItem.scss';

const MenuItem = ({ icon, title }) => (
  <div className="menu-item">
    <img className="menu-item-icon" src={icon} />
    <div className="menu-item-title">
      {title}
    </div>
  </div>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
};

MenuItem.defaultProps = {
  icon: defaultIcon,
  title: 'Title'
};

export default MenuItem;
