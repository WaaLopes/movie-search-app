import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <header className="appHeader">
    <h2>{text}</h2>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
