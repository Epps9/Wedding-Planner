import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './About.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam. Phasellus nec tortor euismod, porta ante at, tempus ex. Maecenas gravida nisi eget iaculis tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed facilisis sodales est sed gravida. Pellentesque sed lorem velit. Vestibulum placerat tortor lectus, vel pretium magna iaculis in. Integer congue rhoncus metus ac condimentum. Suspendisse potenti. Curabitur vehicula metus arcu, vel laoreet nibh accumsan ut. Curabitur eget purus mauris. Phasellus interdum semper quam, a lacinia turpis vulputate at. Integer convallis massa tempor justo ultricies aliquet ac rhoncus neque. Duis laoreet vehicula vehicula. Maecenas venenatis, dui eget euismod convallis, velit erat egestas augue, sit amet ultrices velit justo eu metus. Quisque eu vestibulum ante. Aenean tempus tellus sit amet aliquam condimentum. Duis aliquet gravida scelerisque. Aliquam egestas ornare nisi, rutrum ornare neque varius non. Phasellus placerat bibendum orci. In at nibh consequat lectus elementum porta. Sed tincidunt massa a tortor efficitur tincidunt. Ut vel leo varius, commodo ligula nec, tincidunt tellus. In nisi diam, mattis et molestie ut, maximus a elit. Quisque malesuada, enim id porttitor euismod, massa diam rhoncus eros, ac feugiat mauris ex et felis. Sed felis justo, tincidunt sit amet dictum vel, viverra non mi. Cras volutpat imperdiet justo id vehicula. In auctor quam magna, vitae lacinia lacus volutpat at. Mauris vestibulum tortor ac aliquet finibus. Suspendisse potenti. Ut aliquet mauris aliquet, ultricies nulla eu, ultricies mauris. Phasellus sed vehicula arcu, eget placerat ex. Vivamus nec leo at nibh pharetra iaculis. Aliquam lorem felis, semper a consequat quis, malesuada non nulla.</p>
    <div className={styles.team_member}>
      <span className={styles.bcg}></span>
      <img src="https://images.unsplash.com/photo-1601859574836-7c19da24516a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
      <h2>Mary Johnson</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam.</p>
    </div>
    <div className={styles.team_member}>
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
      <h2>Mary Johnson</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam.</p>
    </div>
    <div className={styles.team_member}>
      <span className={styles.bcg}></span>
      <img src="https://images.unsplash.com/photo-1608504174559-b9eeee51c568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"></img>
      <h2>Mary Johnson</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at sapien nisi. Aenean feugiat mi sed eros elementum, ac faucibus lorem iaculis. Nulla suscipit consequat dolor sed imperdiet. Fusce efficitur purus tortor, ac hendrerit est efficitur pharetra. Aenean at urna sed nisl convallis condimentum. Integer aliquet et ex quis tempor. Ut ut blandit erat. Ut molestie mollis rhoncus. Donec facilisis, nibh quis mattis varius, mi tortor tristique risus, sed commodo magna nisi a neque. Suspendisse id tempor ex. Aliquam rhoncus metus in velit finibus volutpat. Sed scelerisque vitae diam sit amet placerat. Donec nec eros id nisl suscipit sollicitudin. Vivamus commodo turpis mi, at euismod dolor varius ac. Vivamus nec tempor nulla, nec elementum diam.</p>
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
  Component as About,
  // Container as About,
  Component as AboutComponent,
};
