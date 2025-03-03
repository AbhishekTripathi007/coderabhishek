import React from 'react'
import './testimonials.css'
import AVATAR from '../../../assets/avatar.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    name: "Ram",
    review: "Happy with my services, if so please contact me to leave a testimonial here."
  },

  {
    id: 2,
    name: "Sham",
    review: "Happy with my services, if so please contact me to leave a testimonial here."
  },
  {
    id: 3,
    name: "Balram",
    review: "Happy with my services, if so please contact me to leave a testimonial here."
  }
]

export const Testimonials = () => {
  return (
    <section id='testimonals' >
      <h5>
        Review From the clients
      </h5>
      <h2>
      Testimonial 
      </h2>

      <Swiper className="container testimonals_container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ id, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client_avatar">
                  <img src={AVATAR} alt="Avatar" />
                </div>
                <h5 className='client_names'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section >
  )
}

export default Testimonials