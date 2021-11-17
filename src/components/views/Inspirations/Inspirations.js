import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import place from '../../../images/inspirations/place.jpg';
import dresses from '../../../images/inspirations/INSP dress.jpg';
import decorations from '../../../images/inspirations/decorations.jpg';
import AOS from 'aos';
import {Link} from 'react-router-dom';


import Button from '../../common/Button/Button';

import styles from './Inspirations.module.scss';

const Inspirations = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
  }, []);

  return(
    <div className={styles.root}>
      <h1 data-aos="fade-down">Inspirations</h1>
      <div className={styles.box} data-aos="fade-left">
        <span className={styles.bcg}></span>
        <div className={styles.content}>
          <h2>Places</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam. Phasellus nec tortor euismod, porta ante at, tempus ex. Maecenas gravida nisi eget iaculis tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis sodales est sed gravida. </p>
          <Link to="/places"><Button/></Link>
        </div>
        <img src={place}></img>
      </div>
      <div className={styles.box} data-aos="fade-right">
        <img src={dresses}></img>
        <div className={styles.content}>
          <h2>Dresses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam. Phasellus nec tortor euismod, porta ante at, tempus ex. Maecenas gravida nisi eget iaculis tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis sodales est sed gravida. </p>
          <Link to="/dresses"><Button/></Link>
        </div>
      </div>
      <div className={styles.box} data-aos="fade-left">
        <span className={styles.bcg}></span>
        <div className={styles.content}>
          <h2>Decorations</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam. Phasellus nec tortor euismod, porta ante at, tempus ex. Maecenas gravida nisi eget iaculis tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis sodales est sed gravida. </p>
          <Link to="/decorations"><Button/></Link>
        </div>
        <img src={decorations}></img>
      </div>
    </div>
  );
};

Inspirations.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default Inspirations;