import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'; 

const Component = () => (
  <div className={styles.root}>
    <span></span>
    <Link to="/" className={styles.logo_wrapper}>
      <img className={styles.logo} src={'/static/images/marriage.png'}></img>
      <p>Weddingo</p>
    </Link>
    <ul className={styles.menu}>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/offer">Offer</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/inspirations">Inspirations</Link></li>
      <li><Link to="/references">References</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
    </ul>
    <a href="#about"><button className={styles.btn_main}>Explore</button></a>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
