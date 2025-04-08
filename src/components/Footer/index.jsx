import React from 'react'

import logo from '../../assets/logo_desktop_branco.png'
import './style.scss'

export default function Footer() {
  return (
    <footer>
      <p className='footer_txt'>Cuidamos da sua saúde com um atendimento completo e personalizado!</p>
      <div className='footer_container'>
        <img src={logo} alt='Logo Motion. Lê-se: Motion'/>
        <p>&copy; 2025 Clínica Motion. Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
