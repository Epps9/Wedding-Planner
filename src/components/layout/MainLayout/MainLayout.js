import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class MainLayout extends React.Component {

  componentDidMount () {

    const height = window.innerHeight;

    setTimeout(function() {
      window.scrollTo({
        top: height,
        behavior: 'smooth',
      });
    }, 2000); 
  }


  render () {
    const {children} = this.props;

    return (  
      <div className={styles.root}>
        <Header/>
        <div className={styles.components_wrapper}>
          {children}
        </div>
        <Footer/>
      </div>
    );
  }

};

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default MainLayout;
