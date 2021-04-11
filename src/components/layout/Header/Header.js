import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss'; 

const Component = () => (
  <div className={styles.root}>
    <span></span>
    <ul className={styles.menu}>
      <li><a>About us</a></li>
      <li><a>Offer</a></li>
      <li><a>Gallery</a></li>
      <li><a>Inspirations</a></li>
      <li><a>References</a></li>
      <li><a>Contact</a></li>
    </ul>
    <button className={styles.btn_main}>Explore</button>
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
