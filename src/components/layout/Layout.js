import React from "react";

import './layout.css';
import "animate.css/animate.min.css";

import Header from './Header';
import Footer from './Footer';
import Home from '../../pages/Home';

function Layout() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default Layout;
