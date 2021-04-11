import React from 'react';
import PropTypes from 'prop-types';


import styles from './Button.module.scss';

const Component = () => (
  <button className={styles.root}>
    Read more
  </button>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Button,
  Component as ButtonComponent,
};
