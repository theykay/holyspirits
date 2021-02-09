import React from 'react';
import './Header.css';
import Dropdown from "../Dropdown";

const Header = () => {
  return (
    <>
      <div id="headDiv">
        <h3>the header</h3>
        <Dropdown />
      </div>
    </>
  )
};

export default Header;