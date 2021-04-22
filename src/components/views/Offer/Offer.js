import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Offer.module.scss';

const Component = ( ) => (
  <div className={styles.root}>
    <h1>Offer</h1>
    <p>Aliquam erat volutpat. Nam suscipit lacus mauris, et pretium nibh sodales at. Cras quis ligula semper, cursus nunc sed, congue lectus. Fusce lacinia luctus nisl, in varius augue tincidunt quis. Nam facilisis ipsum id nisi iaculis, nec volutpat nibh condimentum. Sed congue maximus nisl hendrerit porta. Donec id lacus aliquet, aliquam massa in, commodo nisl. Suspendisse elit elit, semper a tempus facilisis, dignissim sit amet ligula.</p>
    <div className={styles.packages}>
      <div className={clsx(styles.package, styles.gold)}>
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
      <div className={clsx(styles.package, styles.silver)}>
        <h2>Silver</h2>
        <ul>
          <li>Aliquam erat volutpat. </li>
          <li>Nam suscipit lacus mauris, et pretium nibh sodales at. </li>
          <li>Cras quis ligula semper, cursus nunc sed, congue lectus. </li>
          <li>Donec id lacus aliquet, aliquam massa in, commodo nisl. </li>
        </ul>
        <h3>2000$</h3>
      </div>
      <div className={clsx(styles.package, styles.brown)}>
        <h2>Brown</h2>
        <ul>
          <li>Aliquam erat volutpat. </li>
          <li>Nam suscipit lacus mauris, et pretium nibh sodales at. </li>
        </ul>
        <h3>1000$</h3>
      </div>
    </div>
  </div>
);

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
  Component as Offer,
  // Container as Offer,
  Component as OfferComponent,
};
