import React from 'react';
import PropTypes from 'prop-types';


import styles from './Button.module.scss';

const Button = () => (
  <button className={styles.root}>
    Read more
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;