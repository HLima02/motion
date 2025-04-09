import { useEffect, useState } from 'react'
import Slider from "react-slick";

import img01 from '../../assets/images/img_01.jpg'
import img02 from '../../assets/images/img_02.jpg'
import img03 from '../../assets/images/img_03.jpg'
import img04 from '../../assets/images/img_04.jpg'
import img05 from '../../assets/images/img_05.jpg'
import img06 from '../../assets/images/img_06.jpg'

import './style.scss'

export default function MotionTeamSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <section className='motion_team_slider'>
      <Slider className='' {...settings} >
        <div className='slide_item'>
          <img src={img01} />
        </div>
        <div className='slide_item'>
          <img src={img02} />
        </div>
        <div className='slide_item'>
          <img src={img03} />
        </div>
        <div className='slide_item'>
          <img src={img04} />
        </div>
        <div className='slide_item'>
          <img src={img05} />
        </div>
        <div className='slide_item'>
          <img src={img06} />
        </div>
      </Slider>
    </section>
  )
}
