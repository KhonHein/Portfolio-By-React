import React from 'react'
import './testimonials.css'
import { tests } from '../../data'

import {Swiper,SwiperSlide} from 'swiper/react';
 import { Pagination,Navigation } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
      modules ={[Navigation, Pagination]}
      spaceBetween = {40}
      slidesPreView = {1}
      pagination = {{ clickable:true}}
      >
        {
          tests.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt=''/>
                </div> 
                <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials