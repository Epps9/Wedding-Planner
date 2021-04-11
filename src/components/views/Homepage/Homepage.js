import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../../common/Button/Button';

import styles from './Homepage.module.scss';
import clsx from  'clsx';


const Component = () => (
  <div className={styles.root}>
    <section className={styles.one}>
      <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg'></img>
      <div className={styles.side_content}>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button className={styles.btn}/>
      </div>
    </section>
    <section className={styles.section}></section>
    <section className={styles.section}></section>
    <section className={styles.section}></section>
    <section className={styles.section}></section>
    <section className={styles.section}></section>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
