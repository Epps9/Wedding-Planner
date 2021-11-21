import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'; 

function scrollDown () {

  const height = window.innerHeight;

  setTimeout(function() {
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  }, 100);
}

const Header = () => (
  <div className={styles.root}>
    <span></span>
    <div className={styles.header_content}>
      <Link to="/" className={styles.logo_wrapper} onClick={scrollDown}>
        <img className={styles.logo} src={'/static/images/marriage.png'}></img>
        <p>Weddingo</p>
      </Link>
      <ul className={styles.menu}>
        <li><Link to="/about" onClick={scrollDown}>About us</Link></li>
        <li><Link to="/offer" onClick={scrollDown}>Offer</Link></li>
        <li><Link to="/gallery" onClick={scrollDown}>Gallery</Link></li>
        <li><Link to="/inspirations" onClick={scrollDown}>Inspirations</Link ></li>
        <li><Link to="/contact" onClick={scrollDown}>Contact us</Link></li>
      </ul>
    </div>
    <img className={styles.btn_main} src={'/static/images/down-arrow.png'}></img>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;