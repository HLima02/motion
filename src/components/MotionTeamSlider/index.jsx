import { useEffect, useState } from 'react'
import Slider from "react-slick";

import img01 from '../../assets/imagens_teste/slider_team/img_02.jpg'
import img02 from '../../assets/imagens_teste/slider_team/img_03.jpg'
import img03 from '../../assets/imagens_teste/slider_team/img_04.jpg'

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
          <img src={img01} />
        </div>
        <div className='slide_item'>
          <img src={img02} />
        </div>
        <div className='slide_item'>
          <img src={img03} />
        </div>
      </Slider>
    </section>
  )
}
