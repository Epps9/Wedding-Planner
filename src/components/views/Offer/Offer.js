import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';


import styles from './Offer.module.scss';


const Offer = ( ) => {

  useEffect(() => {
    AOS.init({
      duration : 1800,
    });
  }, []);

  return(
    <div className={styles.root}>
      <h1 data-aos="fade-left" >Offer</h1>
      <p data-aos="fade-left">Aliquam erat volutpat. Nam suscipit lacus mauris, et pretium nibh sodales at. Cras quis ligula semper, cursus nunc sed, congue lectus. Fusce lacinia luctus nisl, in varius augue tincidunt quis. Nam facilisis ipsum id nisi iaculis, nec volutpat nibh condimentum. Sed congue maximus nisl hendrerit porta. Donec id lacus aliquet, aliquam massa in, commodo nisl. Suspendisse elit elit, semper a tempus facilisis, dignissim sit amet ligula.</p>
      <div className={styles.packages}>
        <span></span>
        <div className={styles.package} data-aos="fade-right">
          <span className={styles.gold}></span>
          <h2>Gold</h2>
          <ul>
            <li>Aliquam erat volutpat. </li>
            <li>Nam suscipit lacus mauris, et pretium nibh sodales at. </li>
            <li>Cras quis ligula semper, cursus nunc sed, congue lectus. </li>
            <li>Donec id lacus aliquet, aliquam massa in, commodo nisl. </li>
            <li>Duis neque nisi, imperdiet et nisi et, placerat posuere lectus. </li>
            <li>Sed blandit eget felis rutrum tincidunt. Pellentesque ultrices, </li>
          </ul>
          <h3>3000$</h3>
        </div>
        <div className={styles.package} data-aos="fade-up" >
          <span className={styles.silver}></span>
          <h2>Silver</h2>
          <ul>
            <li>Aliquam erat volutpat. </li>
            <li>Nam suscipit lacus mauris, et pretium nibh sodales at. </li>
            <li>Cras quis ligula semper, cursus nunc sed, congue lectus. </li>
            <li>Donec id lacus aliquet, aliquam massa in, commodo nisl. </li>
          </ul>
          <h3>2000$</h3>
        </div>
        <div className={styles.package} data-aos="fade-left" >
          <span className={styles.rose}></span>
          <h2>Rose</h2>
          <ul>
            <li>Aliquam erat volutpat. </li>
            <li>Nam suscipit lacus mauris, et pretium nibh sodales at. </li>
          </ul>
          <h3>1000$</h3>
        </div>
      </div>
    </div>
  );
};

Offer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default Offer;
