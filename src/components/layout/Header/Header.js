import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'; 

const Header = () => (
  <div className={styles.root}>
    <span></span>
    <div className={styles.header_content}>
      <Link to="/" className={styles.logo_wrapper}>
        <img className={styles.logo} src={'/static/images/marriage.png'}></img>
        <p>Weddingo</p>
      </Link>
      <ul className={styles.menu}>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/offer">Offer</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/inspirations">Inspirations</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
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