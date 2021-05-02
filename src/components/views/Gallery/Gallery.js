import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import { connect } from 'react-redux';

import { GalleryItemAll } from '../../features/GalleryItemAll/GalleryItemAll';

class Component extends React.Component {
  render() {

    const {gallery} = this.props;

    return(
      <div className={styles.root}>
        <span className={styles.bcg}></span>
        {gallery && gallery.map(item => (
          <GalleryItemAll key={item.id} {...item}/>
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  gallery: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  gallery: state.gallery,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Gallery,
  Container as Gallery,
  Component as GalleryComponent,
};
