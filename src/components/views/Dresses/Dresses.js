import React, { useEffect } from 'react';
import styles from './Dresses.module.scss';
import dress1 from '../../../images/dresses/dress1.jpg';
import dress2 from '../../../images/dresses/dress2.jpg';
import dress3 from '../../../images/dresses/dress3.jpg';
import dress4 from '../../../images/dresses/dress4.jpg';
import dress5 from '../../../images/dresses/dress5.jpg';
import dress6 from '../../../images/dresses/dress6.jpg';

import AOS from 'aos';

function Dresses () {
  useEffect (()=> {
    AOS.init({
      duration : 2000,
    });
  }, []);

  return (
    <div className={styles.root}>
      <h1>Find your dream dress</h1>
      <div className={styles.image_box} data-aos="fade-right">
        <img src={dress1} alt="dress1"></img>
        <img src={dress2} alt="dress2"></img>
        <img src={dress3} alt="dress3"></img>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.image_box} data-aos="fade-left">
        <img src={dress4} alt="dress4"></img>
        <img src={dress5} alt="dress5"></img>
        <img src={dress6} alt="dress6"></img>
      </div>
    </div>
  );


};

export default Dresses;