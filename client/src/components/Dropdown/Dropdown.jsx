import React from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn"><FontAwesomeIcon icon={faBars} /></button>
        <div className="dropdownContent">
          <a href="/">store</a>
          <a href="/account">account</a>
          <a href="/checkout">checkout</a>
          <a href="/admin">admin</a>
        </div>
      </div>
    </>
  )
}

export default Dropdown;