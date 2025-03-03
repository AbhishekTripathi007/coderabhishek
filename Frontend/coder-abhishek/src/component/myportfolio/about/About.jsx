import React from 'react'
import './about.css'
import ME from '../../../assets/aboutme.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content ">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>

              <small>3+ years</small>

            </article>

            <article className='about_card'>
              <FiUsers className='about-icon' />
              <h5>Clients</h5>

              <small>3+</small>

            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>

              <small>10+</small>

            </article>

          </div>
          <p>
            Hello, I am Abhishek Tripathi a B.Tech(C.S.E) 2021 passout. I am currently seeking a beginner role to enhance and explore my technical knowledge as a FullStack and Software Developer.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About