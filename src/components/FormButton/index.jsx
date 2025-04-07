import React from 'react'
import { useNavigate  } from 'react-router-dom'
import './style.scss'

export default function FormButton() {
  const navigate = useNavigate();
  
  function goToModule(e, moduleId){
    e.preventDefault()

    if (window.location.pathname === "/") {
      document.getElementById(moduleId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${moduleId}`);
    }
  }

  return (
    <a href='#' onClick={(e) => goToModule(e, 'formulario')} className='form_btn'>Agende sua consulta</a>
  )
}
