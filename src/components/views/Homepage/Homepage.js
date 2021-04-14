import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import styles from './Homepage.module.scss';
import cslx from 'clsx';

const Component = () => (
  <div className={styles.root}>
    <section className={styles.one}>
      <span className={styles.bcg}></span>
      <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg'></img>
      <div id="about" className={styles.side_content}>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button className={styles.btn}/>
      </div>
    </section>
    <section className={styles.two}>
      <div id="offer" className={styles.side_content}>
        <h1>Our offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button/>
      </div>
      <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg'></img>
    </section>
    <section id="gallery" className={styles.three}>
      <span className={styles.bcg}></span>
      <h1>Gallery</h1>
      <div className={styles.images}>
        <div className={cslx(styles.image_box1, styles.box)}>
          <span></span>
          <h2>Jane & Mike</h2>
          <Link><button>See more</button></Link>
        </div>
        <div className={cslx(styles.image_box2, styles.box)}>
          <span></span>
          <h2>Jasmine & Kenny</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box3, styles.box)}>
          <span></span>
          <h2>Daffne & John</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box4, styles.box)}>
          <span></span>
          <h2>Noala & Dwight</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box5, styles.box)}>
          <span></span>
          <h2>Monica & Dan</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box6, styles.box)}>
          <span></span>
          <h2>Kate & Frank</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box7, styles.box)}>
          <span></span>
          <h2>Lisa & Daniel</h2>
          <Link><button>See more</button></Link>
        </div>        
        <div className={cslx(styles.image_box8, styles.box)}>
          <span></span>
          <h2>Anna & Ben</h2>
          <Link><button>See more</button></Link>
        </div>        
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
    <section className={styles.five}>
      <h1>References</h1>
      <span className={styles.arrow}></span>
      <div className={styles.testimonials}>
        <FiArrowRightCircle className={cslx(styles.arrow, styles.arrow_right)}/>
        <div className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Mat & Molly</h3>
        </div>
        <div className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Mat & Molly</h3>
        </div>  
        <div className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Mat & Molly</h3>
        </div>
        <FiArrowLeftCircle className={cslx(styles.arrow, styles.arrow_left)}/>
      </div>
      <span className={styles.arrow}></span>
    </section>
    <section className={styles.six}></section>
    <section className={styles.seven}></section>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
