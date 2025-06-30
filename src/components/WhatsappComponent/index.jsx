import React from 'react'

import './style.scss'

export default function WhatsappComponent () {
  return (
    <a className='whatsapp_icon'
      href="https://wa.me/555511994470472?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20consulta."
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
