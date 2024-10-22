import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;