import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss'; 

const Component = () => (
  <div className={styles.root}>
    <span></span>
    <ul className={styles.menu}>
      <li><a href="#about">About us</a></li>
      <li><a href="#offer">Offer</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#inspirations">Inspirations</a></li>
      <li><a href="#ref">References</a></li>
      <li><a href="#contact">Contact</a></li>
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
