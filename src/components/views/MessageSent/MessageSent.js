import React from 'react';
import PropTypes from 'prop-types';
import {FaCheckCircle} from 'react-icons/fa';


import styles from './MessageSent.module.scss';

const MessageSent = () => (
  <div className={styles.root}>
    <div className={styles.message}>
      <FaCheckCircle className={styles.icon}/>
      <p className={styles.text}>Your message has been sent!</p>
    </div>
  </div>
);

MessageSent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default MessageSent;
