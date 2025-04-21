import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import './style.scss'

export default function ThankyouPage() {
  useEffect(() => {
    // Verifica se a função gtag está disponível no escopo global
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17024527524/3N_ZCKrI0LsaEKTZ9rU_',
        value: 1.0,
        currency: 'BRL'
      })
    }
  }, [])
  
  return (
    <main>
      <Header />
     <section className='thankyou_section' style={{minHeight: '100vh'}}>
       <h1>Obrigado pelo seu contato!</h1>
       <p>Em breve nossa equipe entrará em contato para agendar sua consulta</p>

       <div className='social_icons'>
          <p>Nos siga nas redes sociais:</p>
          <span><a href="https://www.instagram.com/clinica.motion/" target="_blank"><BiLogoInstagramAlt size={29}/></a></span> | 
          <span><a  href="https://wa.me/11994470472" target="_blank"><FaWhatsappSquare size={25}/></a></span>
      </div>

      <Link className='link_home' to="/">Voltar para a página inicial</Link>
     </section>
      <Footer />
    </main>
  )
}
