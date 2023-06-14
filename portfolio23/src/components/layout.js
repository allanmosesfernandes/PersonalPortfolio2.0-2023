import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
