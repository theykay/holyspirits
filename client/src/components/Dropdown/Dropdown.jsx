import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">menu</button>
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