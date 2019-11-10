import React from 'react';
import PropTypes from 'prop-types';

import '../assets/Header.css';

const Header = ({ text }) => (
  <header className="appHeader">
    <h2 className="appHeader-title">{text}</h2>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
