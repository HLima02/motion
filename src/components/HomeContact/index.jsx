import React from 'react'

import FormButton from '../FormButton'
import './style.scss'

export default function HomeContact() {
  return (
    <section className='address'>
      <div className='address_data'>
        <h3>Endereço</h3>
        <p>Rua Fiandeiras, 929 - Itaim Bibi, São Paulo - SP, 04545-006</p>

        <h3>Horário de funcionamento</h3>
        <p>Email: <a className='contact' href='mailto:clinica.motion929@gmail.com'>clinica.motion929@gmail.com</a> </p>
        <p>Telefone: <a className='contact' href='tel:11994470472'>(11) 99447-0472</a></p>

        <h3 className='agende_title'>Agende sua consulta e transforme sua saúde</h3>

        <FormButton classe="text_100" />
      </div>

      <div className='address_map'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2514306747034!2d-46.68492322466878!3d-23.595314078776482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570055ee746d%3A0x7170c0dbd356f338!2sCl%C3%ADnica%20Motion%20-%20Fisioterapia%2C%20Medicina%2C%20Psicologia%20e%20Nutri%C3%A7%C3%A3o.!5e0!3m2!1spt-BR!2sbr!4v1743980751839!5m2!1spt-BR!2sbr" 
        width="100%" height="100%"
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
