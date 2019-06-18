import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  /* Explicitly setting the prop values for a component will override default props */
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  /* Type check warning. Will still compile but will give error/warning if wrong type or not set */
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
