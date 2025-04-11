import profile01 from '../assets/imagens_teste/profile/left_img.jpg'
import profile02 from '../assets/imagens_teste/profile/right_img.jpg'

import netoMachado from '../assets/images/servicos/fisioterapia/profile_neto.jpg'
import leoOliveira from '../assets/images/servicos/fisioterapia/profile_leo.jpg'
import michelOliveira from '../assets/images/servicos/ortopedia/profile_michel.jpg'
import amandaCarassini from '../assets/images/servicos/psicologia/profile_amanda.jpg'
import aliceDutra from '../assets/images/servicos/medicina_esporte/profile_alice.jpg'
import mariaEduarda from '../assets/images/servicos/nutricao/profile_maria.jpg'

export default [
  {
    id: 1,
    name: 'Neto Machado',
    specialization: 'Especialista em fisioterapia do esporte e exercício',
    description: 'Fisioterapeuta graduado pela UNESP, especialista em Fisioterapia do Esporte e Exercício pelo HCFMUSP. Possui experiência no atendimento a atletas, com passagem pelo futebol profissional masculino do São Paulo FC (2023). Apaixonado pela reabilitação e prevenção de lesões, busca constantemente atualização e aprimoramento na área esportiva.',
    education: [
      'Bacharel em Fisioterapia pela Universidade Federal de São Paulo',
      'Especialista em fisioterapia do esporte e exercício pelo HCFMUSP'
    ],
    profile: netoMachado,
    leftSide: true
  },
  {
    id: 2,
    name: 'Leonardo Oliveira ',
    specialization: 'Especialista em Fisioterapia musculoesquelética',
    description: 'Fisioterapeuta graduado pelo Centro Universitário São Camilo, especialista em Fisioterapia Musculoesquelética pela Santa Casa de São Paulo e mestre em Ciências da Reabilitação pela Uninove. Atua como professor em cursos voltados para técnicas de redução da dor musculoesquelética e avaliação do membro inferior. Atualmente, aprofunda seus estudos com pós-graduações em Fisiologia do Exercício do Esporte e em Preparação Física e Treinamento Personalizado pelo NEFET. Apaixonado por reabilitação e performance, busca constante atualização para oferecer o melhor cuidado aos pacientes e atletas.',
    education: [
      'Bacharel em Fisioterapia pela Universidade São Camilo',
      'Especialista em Fisioterapia musculoesquelética pela Santa Casa de São Paulo ',
      'Mestre em Ciências da Reabilitação - Uninove',
      'Pós graduando em Fisiologia do exercício do esporte - NEFET',
      'Pós graduando em prepração física e treinamento personalizada de excelência - NEFET'
    ],
    profile: leoOliveira,
    leftSide: false
  },
  {
    id: 3,
    name: 'Michel Oliveira',
    specialization: 'Reabilitação, fortalecimento e alívio de dores',
    description: 'Médico ortopedista e cirurgião de joelho pela USP, doutorando na mesma instituição. Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Cirurgia do Joelho (SBCJ). Dedica-se ao tratamento e recuperação de lesões ortopédicas, com foco na saúde e performance dos pacientes.',
    education: [
      'Médico, Ortopedista e Cirurgião de Joelho pela USP Doutorando USP',
      'Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)',
      'Membro da Sociedade Brasileira de Cirurgia do Joelho (SBCJ)'
    ],
    profile: michelOliveira,
    leftSide: true
  },
  {
    id: 4,
    name: 'Alice Dutra',
    specialization: 'Especialista em  Medicina do Exercício e do Esporte',
    description: 'Médica graduada pela Universidade de Uberaba (2021), residente em Medicina do Exercício e do Esporte e pós-graduanda em Nutrologia pela Unifesp. Pesquisadora em fisiologia do exercício, com experiência no atendimento a atletas. Atuou como médica voluntária na equipe de alto rendimento da base da natação da Unisanta por duas temporadas. Apaixonada por performance, saúde e bem-estar, busca aliar conhecimento científico e prática clínica para otimizar o desempenho esportivo.',
    education: [
      'Bacharel em Medicina pela Universidade de Uberaba',
      'Residência de Medicina do Exercício e do Esporte',
      'Pós- graduação em Nutrologia pela Unifesp'
    ],
    profile: aliceDutra,
    leftSide: false
  },
  {
    id: 5,
    name: 'Amanda Carassini ',
    specialization: 'Especialista em Análise do Comportamento Aplicada, com foco no desenvolvimento cognitivo, emocional e comportamental.',
    description: 'Psicóloga graduada pela Universidade Presbiteriana Mackenzie, especialista em Análise do Comportamento Aplicada aos Transtornos do Neurodesenvolvimento e Linguagem pela UFSCar. Mestre em Ciência do Desenvolvimento Humano pelo Mackenzie, dedica-se ao estudo e à prática voltados ao desenvolvimento cognitivo, emocional e comportamental. Apaixonada por promover a qualidade de vida e o bem-estar, alia conhecimento científico à atuação clínica para oferecer um atendimento humanizado e eficaz.',
    education: [
      'Graduada em psicologia pela universidade presbiteriana Mackenzie',
      'Pós Graduada em análise do comportamento aplicada aos transtornos do Neuro desenvolvimento e linguagem pela Federal de São Carlos',
      '⁠Mestre em ciência do desenvolvimento Humano pelo Mackenzie'
    ],
    profile: amandaCarassini,
    leftSide: true
  },
  {
    id: 6,
    name: 'Maria Eduarda Coelho',
    specialization: 'Especialista em nutrição funcional e abordagem prática na alimentação saudável.',
    description: 'Nutricionista graduada pelo Centro Universitário São Camilo e pós-graduanda em Nutrição Funcional pela VP. Busca constante atualização, tendo realizado os cursos Nutricionário, com a nutricionista Marina Gorga, e Nutrição na Prática, com a nutricionista Giovanna Azevedo. Apaixonada por saúde e bem-estar, tem como objetivo oferecer um atendimento personalizado e baseado em ciência para promover qualidade de vida e equilíbrio alimentar.',
    education: [
      'Graduação pelo Centro Universitário São Camilo',
      'Pós graduanda em nutrição funcional na VP',
      'Curso Nutricionário ministrado pela nutricionista Marina Gorga e Curso ',
      'Nutrição na prática ministrado pela nutricionista Giovanna Azevedo'
    ],
    profile: mariaEduarda,
    leftSide: false
  },
]