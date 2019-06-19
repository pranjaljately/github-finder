import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

/* Explicitly setting the prop values for a component will override default props */
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

/* Type check warning. Will still compile but will give error/warning if wrong type or not set */
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
