import { useContext } from 'react'
import { useNavigate  } from 'react-router-dom'
import './style.scss'

import { UserContext } from '../../context/store'

export default function FormButton({ classe, label }) {
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
    href={
      label ? 
      'https://api.whatsapp.com/send/?phone=5511994470472&text=Oi,+tudo+bem%3F+Gostaria+de+agendar+minha+visita.&type=phone_number&app_absent=0' :
      'https://api.whatsapp.com/send/?phone=5511994470472&text=Oi,+tudo+bem%3F+Gostaria+de+agendar+minha+consulta.&type=phone_number&app_absent=0'  }
    className={`form_btn  ${classe}`}
    target='_blank'
    >{label ? label : 'Agende sua consulta'}</a>
  )
}
