import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
  }, []);

  return (
    <div className={styles.root}>
      <h1 data-aos="fade-down">Contact us</h1>
      <form className={styles.contact_form} data-aos="fade-up">
        <input type="text" placeholder="e-mail"></input>
        <textarea type="text" placeholder="your message"></textarea>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
