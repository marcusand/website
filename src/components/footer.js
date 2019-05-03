import PropTypes from 'prop-types';
import React from 'react';
import startButton from '../images/start.png';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import instagramIcon from '../images/instagram.png';
import '../styles/footer.scss';

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer-left">
      <img 
        src={startButton}
        alt="start"
        className="start-button"
      />
    </div>
    <div className="footer-right" >
      <a href="https://github.com/marcusand" target="new">
        <img className="footer-icon" src={githubIcon}/>
      </a>
      <a href="https://www.linkedin.com/in/marcus-schreiter-4b04a6182/" target="new">
        <img className="footer-icon" src={linkedinIcon}/>
      </a>
      <a href="https://www.instagram.com/marcusschreiter/" target="new">
        <img className="footer-icon" src={instagramIcon}/>
      </a>
    </div>
    {siteTitle}
  </div>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
