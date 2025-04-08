import { Section } from 'lucide-react'
import React from 'react'

import './style.scss'

export default function HomeSpaceVideo() {
  return (
    <section className='video_section' id='nosso_espaco'>
      <h2>NOSSO ESPAÇO</h2>

      <div>
        <video width="100%" controls>
          <source src="https://pu2s0mmwr4wl1xus.public.blob.vercel-storage.com/motion_clinica-1faLeUYJwU7asyJLE60kYV8F86I4Ic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
