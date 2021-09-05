import React from 'react';
import PropTypes from 'prop-types';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.root}>
    <div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/"><FaFacebookSquare className={styles.icon}/></a>
        <a href="https://www.instagram.com/"><FaInstagramSquare className={styles.icon}/></a>
        <a href="https://twitter.com/?lang=en"><FaTwitterSquare className={styles.icon}/></a>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default Footer;