import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainPageGalleryItem.module.scss';

const MainPageGalleryItem = ({id, names, main_image}) => (
  <div className={styles.box}>
    <span></span>
    <img src={main_image}></img>
    <h2>{names}</h2>
    <Link to={`/${id}`}><button>See more</button></Link>
  </div>
);

MainPageGalleryItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  names: PropTypes.string,
  id: PropTypes.node,
  main_image: PropTypes,
};


export default MainPageGalleryItem;
