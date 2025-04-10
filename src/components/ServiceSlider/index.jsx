import React from 'react'
import Slider from "react-slick";

import FormButton from '../FormButton'
import './style.scss'

export default function ServiceSlider({specList}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className='service_slider'>
      <h1>Áreas de atuação</h1>

      <div className='service_slider'>
        <Slider className='' {...settings} >
          {specList.map((item) => (
            <div className='service_slider_item'>
              <div className='service_left'>
                <img src={item.image} />
              </div>
              <div className='service_right'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <FormButton/>
              </div>

              
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
