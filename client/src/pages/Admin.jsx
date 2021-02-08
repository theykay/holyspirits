// "backend" for store employees. View current orders, change status (pending, ready for pickup, picked up), add/remove/edit goods
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {
  return (
    <>
      <Header />
      <h3>hark! an admin</h3>
      <Footer />
    </>
  )
}

export default Admin;