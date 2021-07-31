import React from 'react';
import PropTypes from 'prop-types';
import {FaCheckCircle} from 'react-icons/fa';


import styles from './MessageSent.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.message}>
      <FaCheckCircle className={styles.icon}/>
      <p className={styles.text}>Your message has been sent!</p>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as MessageSent,
  // Container as MessageSent,
  Component as MessageSentComponent,
};
