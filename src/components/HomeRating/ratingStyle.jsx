import React from 'react'

import stars from '../../assets/stars.png'

export default function RatingStyle({id, rating, name}) {
  return (
    <div key={id} className='rating_slide'>
      <img  src={stars} alt='icone com 5 estrelas amarelas de avaliação' />
      <p className='avaliacao'>{rating}</p>
      <p className='nome'>{name}</p>
    </div>
  )
}
