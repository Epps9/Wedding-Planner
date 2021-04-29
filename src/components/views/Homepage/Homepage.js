import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { SliderData } from '../../features/ImageSlider/SliderData';

import { connect } from 'react-redux';

import styles from './Homepage.module.scss';
import cslx from 'clsx';
import { ImageSlider } from '../../features/ImageSlider/ImageSlider';
import { MainPageGalleryItem } from '../../features/MainPageGalleryItem/MainPageGalleryItem';

const Component = ({gallery}) => (
  <div className={styles.root}>
    <section className={styles.one}>
      <span className={styles.bcg}></span>
      <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg'></img>
      <div id="about" className={styles.side_content}>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/aboutus"><Button className={styles.btn}/></Link>
      </div>
    </section>
    <section className={styles.two}>
      <div id="offer" className={styles.side_content}>
        <h1>Our offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/offer"><Button className={styles.btn}/></Link>
      </div>
      <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg'></img>
    </section>
    <section id="gallery" className={styles.three}>
      <span className={styles.bcg}></span>
      <h1>Gallery</h1>
      <div className={styles.images}>
        {gallery && gallery.map(item => (
          <MainPageGalleryItem key={item.id} {...item}/>
        ))}   
      </div>
    </section>
    <section id="inspirations" className={styles.four}>
      <h1>Inspirations</h1>
      <div className={styles.insp_boxes}>
        <div className={cslx(styles.insp_box, styles.places)}>
          <span></span>
          <h2>Places</h2>
        </div>
        <div className={cslx(styles.insp_box, styles.dresses)}>
          <span></span>
          <h2>Dresses</h2>
        </div>
        <div className={cslx(styles.insp_box, styles.accessories)}>
          <span></span>
          <h2>Accessories</h2>
        </div>
      </div>
    </section>
    <section id="references" className={styles.five}>
      <span className={styles.bcg}></span>
      <h1>References</h1>

      <ImageSlider slides={SliderData}/>
    
    </section>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  gallery: PropTypes.node,
};

const mapStateToProps = state => ({
  gallery: state.gallery,
});


const Container = connect(mapStateToProps, null)(Component);


export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
