import { useContext } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

import { UserContext } from '../../context/store'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from '../../assets/logo_desktop_branco.png'
import logoMobile from '../../assets/logo_mobile_branco.png'
import FormButton from '../FormButton'

import './style.scss'

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(UserContext)
  const navigate = useNavigate();

  function goToModule(e, moduleId){
    e.preventDefault()
    console.log(moduleId)
    if (window.location.pathname === "/") {
      document.getElementById(moduleId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${moduleId}`);
    }
  }

  return (
    <header>
      <div className='header_desktop'>
        <Link to="/"><img src={logo} alt='Logo Motion. Lê-se: Motion'/></Link>
        <nav className='menu_navegacao'>
          <a onClick={(e) => goToModule(e, 'servicos')}>Serviços</a>
          <Link to="/nosso_time">Nosso time</Link>
          <a onClick={(e) => goToModule(e, 'nosso_espaco')}>Nosso espaço</a>
          <FormButton/>
        </nav>
      </div>

      <div className='header_mobile'>
        <div className='top_section'>
          <Link to="/"><img src={logoMobile} alt='Logo Motion. Lê-se: M'/></Link>
          <button className='menu_icon' onClick={() => {setMenuIsOpen(!menuIsOpen)}
          }>
              {menuIsOpen ? <X size={30} color='#fff' /> : <Menu size={30} color='#fff' />}
          </button>
        </div>
        
      </div>  
      {/* style={{display: menuIsOpen ? 'block' : 'none'}} */}
      <motion.div 
      initial={{ opacity: "0", display: "none" }}
      animate={{opacity: menuIsOpen ? "1" : "0" ,  display: menuIsOpen ? "block" : "none"}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='header_mobile' 
      >
        <ul className='bottom_section'  >
          <li><a href='#'>Serviços</a></li>
          <li> <Link to="/nosso_time">Nosso time</Link></li>
          <li><a href='#'> Nosso espaço</a></li>
          <li><FormButton/></li>
        </ul> 
      </motion.div> 
      
    </header>
  )
}
