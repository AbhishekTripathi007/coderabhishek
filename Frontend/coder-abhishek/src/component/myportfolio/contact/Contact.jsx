import React from 'react'
import './contact.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Connect with me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <FaLinkedin className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Professional profile</h5>
            <a
              href='https://www.linkedin.com/in/abhishektripathi007/'
              target='_blank'
              rel='noreferrer'
            >
              Connect
            </a>
          </article>

          <article className='contact_option'>
            <FaGithub className='contact_option-icon' />
            <h4>GitHub</h4>
            <h5>Projects and experiments</h5>
            <a
              href='https://github.com/AbhishekTripathi007'
              target='_blank'
              rel='noreferrer'
            >
              View profile
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
