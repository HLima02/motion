import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";

import './style.scss'

export default function ThankyouPage() {
  return (
    <main>
      <Header />
     <section className='thankyou_section' style={{minHeight: '100vh'}}>
       <h1>Obrigado pelo seu contato!</h1>
       <p>Em breve nossa equipe entrará em contato para agendar sua consulta</p>

       <div className='social_icons'>
          <p>Nos siga nas redes sociais:</p>
          <span><a href="#" target="_blank"><BiLogoInstagramAlt size={29}/></a></span> | 
          <span><a href="#" target="_blank"><FaFacebookSquare size={25}/></a></span>
      </div>

      <Link className='link_home' to="/">Voltar para a página inicial</Link>
     </section>
      <Footer />
    </main>
  )
}
