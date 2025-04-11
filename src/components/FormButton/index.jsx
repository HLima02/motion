import { useContext } from 'react'
import { useNavigate  } from 'react-router-dom'
import './style.scss'

import { UserContext } from '../../context/store'

export default function FormButton() {
  const navigate = useNavigate();
  const { menuIsOpen, setMenuIsOpen } = useContext(UserContext)
  
  function goToModule(e, moduleId){
    e.preventDefault()

    if (window.location.pathname === "/") {
      document.getElementById(moduleId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${moduleId}`);
    }

    setMenuIsOpen(false)
  }

  return (
    <a href='#' onClick={(e) => goToModule(e, 'formulario')} className='form_btn'>Agende sua consulta</a>
  )
}
