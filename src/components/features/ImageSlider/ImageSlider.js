import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import AOS from 'aos';

import cslx from 'clsx';
import styles from './ImageSlider.module.scss';
import { SliderData } from './SliderData';

const ImageSlider = ({slides}) => {

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


      {SliderData.map((slide, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            {index === current && (
              <div className={styles.testimonial}>
                <FiArrowRightCircle className={cslx(styles.arrow, styles.arrow_right)} onClick={nextSlide}/>
                <p data-aos="fade-down">{slide.text}</p>
                <h2 data-aos="fade-up">{slide.names}</h2>
                <FiArrowLeftCircle className={cslx(styles.arrow, styles.arrow_left)} onClick={prevSlide}/>
              </div>
            )}
          </div>
        );
      })}


    </div>
  );

};

ImageSlider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  slides: PropTypes.node,
};


export default ImageSlider;