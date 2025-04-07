import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import services from '../../services/api_services'
import SliderComponent from './SliderComponent'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeServices() {
  const [slidePerView, serSlidePerView] = useState(4)

  useEffect(() => {
    function handleResize(){
      window.addEventListener('resize', () => {
        if(window.innerWidth < 1350) {
          serSlidePerView(3)
        }
        
        if(window.innerWidth < 850) {
          serSlidePerView(2)
        }
    
        if(window.innerWidth < 630 ){
          serSlidePerView(1)
        }
      })
      if(window.innerWidth < 1350) {
        serSlidePerView(3)
      }

      if(window.innerWidth < 850) {
        serSlidePerView(2)
      }

      if(window.innerWidth < 630 ){
        serSlidePerView(1)
      }
    }

    handleResize()
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidePerView,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className='home_services' id='servicos'>
      <h2>Nossos Serviços Especializados para a Sua Saúde</h2>

      <Slider {...settings}  className='carrossel_section'>
        {services.map((service) => (
          <SliderComponent key={service.id} coverImg={service.coverImg} title={service.title} subTitle={service.subTitle} linkTxt={service.linkTxt} />
        ))}
      </Slider>
    </section>
  )
}
