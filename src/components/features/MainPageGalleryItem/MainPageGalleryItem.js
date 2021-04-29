import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainPageGalleryItem.module.scss';

const Component = ({id, names, main_image}) => (
  <div className={clsx(styles.image_box1, styles.box)}>
    <span></span>
    <img src={main_image}></img>
    <h2>{names}</h2>
    <Link to={`/${id}`}><button>See more</button></Link>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  names: PropTypes.string,
  id: PropTypes.node,
  main_image: PropTypes,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainPageGalleryItem,
  // Container as MainPageGalleryItem,
  Component as MainPageGalleryItemComponent,
};
