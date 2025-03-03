import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


export const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_vjhql5d', 'template_dq489fe', form.current, 'DWITF0f3QaQ1_TooW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Send an Email</h4>
            <h5>omg.gorakh@gmail.com</h5>
            <a href="mailto:omg.gorakh@gmail.com" target='_blank'>Send Message</a>

          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Abhishek Tripathi</h5>
            <a href="https://m.me/gorakh.nath.98" target='_blank'>Send Message</a>

          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Abhishek Tripathi</h5>
            <a href="https://api.whatsapp.com/send?phone=+917985617963" target='_blank'>Send Message</a>

          </article>

        </div>

        {/* End of the contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact