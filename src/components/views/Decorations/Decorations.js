import { React, useEffect } from 'react';
import styles from './Decorations.module.scss';
import img1 from '../../../images/decorations/img1.jpg';
import img2 from '../../../images/decorations/img2.jpg';
import img3 from '../../../images/decorations/img3.jpg';
import img4 from '../../../images/decorations/img4.jpg';
import img5 from '../../../images/decorations/img5.jpg';
import img6 from '../../../images/decorations/img6.jpg';
import AOS from 'aos';

function Decorations () {
  useEffect (()=> {
    AOS.init({
      duration : 2000,
    });
  }, []);

  return (
    <div className={styles.root}>
      <h1>Decorations</h1>
      <div className={styles.image_box} data-aos="fade-right">
        <img src={img1} alt="image"></img>
        <img src={img2} alt="image"></img>
        <img src={img3} alt="image"></img>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.image_box} data-aos="fade-left">
        <img src={img4} alt="image"></img>
        <img src={img5} alt="image"></img>
        <img src={img6} alt="image"></img>
      </div>
    </div>
  );
};

export default Decorations;
