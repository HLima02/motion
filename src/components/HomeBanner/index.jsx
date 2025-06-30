import React from 'react'
import FormButton from '../FormButton'
import './style.scss'

export default function HomeBanner() {
  return (
    <section className='banner_home'>
      <div className='banner_home_content'>
        <h1>Seu movimento é o que nos move</h1>
        <p>Nossa clínica reúne uma <b>equipe multidisciplinar</b> para um tratamento integrado e eficaz.</p>
        <div className='banner_home_form_area'>
          <FormButton classe="text_200" label="Agende sua visita" />
        </div>
      </div>
    </section>
  )
}
