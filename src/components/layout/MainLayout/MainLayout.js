import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Homepage } from '../../views/Homepage/Homepage';


const Component = ({children}) => (
  <div className={styles.root}>
    <Header/>
    {children}
    <Footer/>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as MainLayout,
  // Container as Homepage,
  Component as MainLayoutComponent,
};
