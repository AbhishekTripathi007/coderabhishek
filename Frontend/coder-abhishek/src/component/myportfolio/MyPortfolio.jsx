import React from "react";
import Header from "./header/Header";
import Navbar from "./nav/Navbar";
import About from "./about/About";
import Experience from "./experience/Expereince";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

// import styles from "./MyPortfolio.module.css"
import "./myportfolio.css"

export const MyPortfolio = () => {
  return (
    // <div className={styles.portfoliopage}>
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default MyPortfolio;
