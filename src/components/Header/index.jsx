import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation  } from 'react-router-dom'

import { UserContext } from '../../context/store'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from '../../assets/logo_desktop_branco.png'
import logoMobile from '../../assets/logo_mobile_branco.png'
import FormButton from '../FormButton'

import './style.scss'

export default function Header() {
  const [isFixed, setIsFixed] = useState(false)
  const { menuIsOpen, setMenuIsOpen } = useContext(UserContext)
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  function goToModule(e, moduleId){
    e.preventDefault()

    if (window.location.pathname === "/") {
      document.getElementById(moduleId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${moduleId}`);
    }
    setMenuIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 5) {
        setIsFixed( true)
      } else {
        setIsFixed(false)
      }
    })
  }, [])

  return (
    <header className={`${isFixed ? "fixed_header" : ""} ${!isHomePage ? "service_background" : ""} ${menuIsOpen ? "service_background" : ""}`} >
      <div className='header_desktop'>
        <Link  to="/"><img src={logo} alt='Logo Motion. Lê-se: Motion'/></Link>
        <nav className='menu_navegacao'>
          <a href='#' onClick={(e) => goToModule(e, 'servicos')}>Serviços</a>
          <Link to="/nosso_time" href='#'>Nosso time</Link>
          <a href='#' onClick={(e) => goToModule(e, 'nosso_espaco')}>Nosso espaço</a>
          <FormButton classe="text_100" />
        </nav>
      </div>

      <div className={`header_mobile`} >
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
          <li><a href='#' onClick={(e) => goToModule(e, 'servicos')}>Serviços</a></li>
          <li> <Link to="/nosso_time" onClick={() => setMenuIsOpen(false)}>Nosso time</Link></li>
          <li><a href='#' onClick={(e) => goToModule(e, 'nosso_espaco')}> Nosso espaço</a></li>
          <li><FormButton classe="text_100" /></li>
        </ul> 
      </motion.div> 
      
    </header>
  )
}
