import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { Link} from 'react-router-dom'

export default function SliderComponent({coverImg, title, subTitle, linkTxt}) {
  return (
    <div  className='carrossel_slider'>
      <Link to={`/servicos/${linkTxt}`}>
        <div className='slider_img'>
          <img src={coverImg} alt={title} />  
        </div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </Link>
    </div>
  )
}
