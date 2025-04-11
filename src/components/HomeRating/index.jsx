import { useState, useEffect } from 'react'

import RatingStyle from './ratingStyle'
import rantingList from '../../services/api.rating'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.scss'

export default function HomeRating() {
  const [slidePerView, serSlidePerView] = useState(4)

  useEffect(() => {
    function handleResize(){
      window.addEventListener('resize', () => {
        if(window.innerWidth < 1400) {
          serSlidePerView(3)
        }
        
        if(window.innerWidth < 1150) {
          serSlidePerView(2)
        }
    
        if(window.innerWidth < 750 ){
          serSlidePerView(1)
        }
      })
      if(window.innerWidth < 1400) {
        serSlidePerView(3)
      }

      if(window.innerWidth < 1150) {
        serSlidePerView(2)
      }

      if(window.innerWidth < 750 ){
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
    <section className='rating_section'>
      <div className='rating_content'>
        <h2>O QUE DIZEM NOSSOS PACIENTES?</h2>

        <Slider {...settings} className='slider'>
          {rantingList.map((rating) => (
            <RatingStyle key={rating.id} id={rating.id} rating={rating.rating} name={rating.name} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
