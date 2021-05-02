import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getOneItem } from '../../../redux/imagesRedux';

import styles from './GalleryItem.module.scss';

class Component extends React.Component {


  render () {
      
    const {names, image1, image2, image3, image4, image5, image6} = this.props.galleryItem;

    return (
      <div className={styles.root}>
        <h1>{names}</h1>
        <div className={styles.gallery}>
          <img src={image1} className={styles.image}></img>
          <img src={image2} className={styles.image}></img>
          <img src={image3} className={styles.image}></img>
          <img src={image4} className={styles.image}></img>
          <img src={image5} className={styles.image}></img>
          <img src={image6} className={styles.image}></img>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  names: PropTypes.string,
  image1: PropTypes.node,
  image2: PropTypes.node,
  image3: PropTypes.node,
  image4: PropTypes.node,
  image5: PropTypes.node,
  image6: PropTypes.node,
  galleryItem: PropTypes.node,
};

const mapStateToProps = (state, props) => {
  console.log('dsdasdad', props);
  return ({
    galleryItem: getOneItem(state, props.match.params.id),
  });

};


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as GalleryItem,
  Container as GalleryItem,
  Component as GalleryItemComponent,
};
