import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Abhishek</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonals">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer_socials">
        
        <a href="https://www.facebook.com/gorakh.nath.98/" target="_blank"><FaFacebookF /></a>
        
        <a href="https://www.instagram.com/_abhishek.tripathi_/" target="_blank"><FiInstagram /></a>
        
        <a href="https://twitter.com/Abhishe95377083" target="_blank"><IoLogoTwitter /></a>
      </div>

<div className="footer_copyright">
  <small>
    &copy; Abhishek Tripathi. All rights reserved.
  </small>
</div>
    </footer>
  )
}

export default Footer
