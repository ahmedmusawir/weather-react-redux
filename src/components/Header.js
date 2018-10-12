import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

const Header = (props) => {
  const { branding } = props;

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{branding}</h1>
      </header>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
