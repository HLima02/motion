import { useState } from 'react'

import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';
import './style.scss'

export default function HomeForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [especialidade, setEspecialidade] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    if(nome != '' && email != '' && telefone != '' && especialidade != ''){
      toast.success('Nossa equipe entrará em contato! Obrigado')
    } else {
      toast.warning('Preencha todos os campos, por favor.')
    }
  }

  return (
    <section className='home_form'>
      <div className='home_form_content' id='formulario'>
        <div className='form_left'>
          <h2>Preencha o formulário para agendar uma sessão</h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <IMaskInput mask="(00) 00000-0000" placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} >
          <option value="">Selecione especialidade...</option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="ortopedia">Ortopedia</option>
            <option value="medicina_esporte">Medicina do Esporte</option>
            <option value="nutricao">Nutrição</option>
            <option value="psicologia">Psicologia</option>
          </select>

          <button type='submit'>Agende sua consulta</button>
        </form>
      </div>
      
    </section>
  )
}
