import { useContext } from 'react'
import { useNavigate  } from 'react-router-dom'
import './style.scss'

import { UserContext } from '../../context/store'

export default function FormButton({ classe }) {
  const navigate = useNavigate();
  const { menuIsOpen, setMenuIsOpen } = useContext(UserContext)
  
  function goToModule(e, moduleId){
    e.preventDefault()



    // if (window.location.pathname === "/") {
    //   document.getElementById(moduleId)?.scrollIntoView({ behavior: "smooth" });
    // } else {
    //   navigate(`/?scrollTo=${moduleId}`);
    // }

    setMenuIsOpen(false)
  }

  return (
    // <a href='#' onClick={(e) => goToModule(e, 'formulario')} className='form_btn'>Agende sua consulta</a>
    <a 
    href='https://api.whatsapp.com/send/?phone=5511994470472&text=Ol%C3%A1%2C+tudo+bem%3F+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0' 
    className={`form_btn  ${classe}`}
    target='_blank'
    >Agende sua consulta</a>
  )
}
