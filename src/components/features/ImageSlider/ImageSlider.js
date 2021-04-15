import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import cslx from 'clsx';
import styles from './ImageSlider.module.scss';
import { SliderData } from './SliderData';

const Component = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const lenght = slides.lenght;

  const nextSlide = () => {
    setCurrent(current === lenght -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current ===  0 ? lenght - 1 : current - 1);
  };

  console.log('current', current);

  return (
    <div className={styles.testimonials}>
      <FiArrowRightCircle className={cslx(styles.arrow, styles.arrow_right)} onClick={nextSlide}/>

      {SliderData.map((slide, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            {index === current && (
              <div className={styles.testimonial} >
                <p>{slide.text}</p>
                <h3>{slide.names}</h3>
              </div>
            )}
          </div>
        );
      })}

      <FiArrowLeftCircle className={cslx(styles.arrow, styles.arrow_left)} onClick={prevSlide}/>
    </div>
  );

};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  slides: PropTypes.node,
};


export {
  Component as ImageSlider,
  // Container as ImageSlider,
  Component as ImageSliderComponent,
};
