import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {

  const data = [
    {
      avatar: AVT1,
      name: 'Tina Show',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, idLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!'
    },
    {
      avatar: AVT2,
      name: 'Tina Show',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, idLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!'
    },
    {
      avatar: AVT3,
      name: 'Tina Show',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, idLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!'
    },
    {
      avatar: AVT4,
      name: 'Tina Show',
      review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, idLorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, id!'
    },
  ]

  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials