import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import {Link} from 'react-router-dom';

import styles from './Contact.module.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', message: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

  }

  componentDidMount() {
    AOS.init({
      duration : 2000,
    });
  };

  handleEmailChange(event) {
    this.setState({ email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value});
  }

  handleSubmit(event) {
    alert(`Your message "${this.state.message}" has been sent!`);
    event.preventDefault();
    this.setState({email: '', message: ''});
  }



  render() {
    return (
      <div className={styles.root}>
        <h1 data-aos="fade-down">Contact us</h1>
        <form className={styles.contact_form} data-aos="fade-up" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="e-mail" value={this.state.email} onChange={this.handleEmailChange}></input>
          <textarea type="text" placeholder="your message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
          <Link to="/sent"><button className={styles.submit}type="submit">Send</button></Link>
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export default Contact;
