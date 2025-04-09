import React from 'react'

import './style.scss'

export default function WhatsappComponent () {
  return (
    <a className='whatsapp_icon'
      href="https://wa.me/11994470472" // Substitua pelo seu número
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  )
}
