import React from 'react'
import { GrInstagram } from "react-icons/gr";
import './style.scss'

export default function InstagramComponent () {
  return (
    <a className='instagram_icon'
      href="https://www.instagram.com/clinica.motion/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GrInstagram size={34}/>
    </a>
  )
}
