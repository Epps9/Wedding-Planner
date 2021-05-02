import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import AOS from 'aos';

import cslx from 'clsx';
import styles from './ImageSlider.module.scss';
import { SliderData } from './SliderData';

const Component = ({slides}) => {

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current ===  0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.testimonials}>
      <FiArrowRightCircle className={cslx(styles.arrow, styles.arrow_right)} onClick={nextSlide}/>

      {SliderData.map((slide, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            {index === current && (
              <div className={styles.testimonial} >
                <p>{slide.text}</p>
                <h2>{slide.names}</h2>
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
