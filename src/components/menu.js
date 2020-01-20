// import PropTypes from 'prop-types';
import React from 'react';
import userIcon from '../images/ich.jpg';
import '../styles/menu.scss';

const Menu = () => (
  <div className="menu">
    <header>
      <img className="user-icon" src={userIcon} />
      <span className="user-name">Marcus Schreiter</span>
    </header>
    <section>
      <div className="menu-left">
       <h2>Hello!</h2>
       <p>You found my personal website, wow!<br />
       Unfortunately there is not much here (yet)...<br />
       But make sure to check my </p>
       <p>
       <a href="https://github.com/marcusand" target="new">github</a> <br/>
       <a href="https://www.instagram.com/marcusschreiter/" target="new">instagram</a> <br/>
       or <a href="https://www.linkedin.com/in/marcus-schreiter-4b04a6182/" target="new">linkedin</a> <br/>
       </p>
       <p>
         Bye!
       </p>

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
