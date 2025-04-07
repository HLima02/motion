import fisioBanner from '../assets/imagens_teste/fisioterapia_ilustracao.jpg'
import ortopediaBanner from '../assets/imagens_teste/ortopedia_ilustracao.jpg'
import esporteBanner from '../assets/imagens_teste/medico_esporte.png'
import nutricaoBanner from '../assets/imagens_teste/nutricao_ilustracao.jpg'
import psicologiaBanner from '../assets/imagens_teste/psicologia_ilustracao.jpg'

import fisioImage from '../assets/imagens_teste/fisioterapia.jpg'

export default [
  {
    id: 1,
    title: 'Fisioterapia',
    subTitle: 'Recuperação e fortalecimento muscular para sua qualidade de vida',
    coverImg: fisioBanner,
    linkTxt: 'fisioterapia',
    serviceDetail: [
      {
        id: 1,
        title: 'Recovery',
        description: 'Protocolo personalizado de recuperação muscular que combina a eficácia da liberação miofascial com a tecnologia da bota pneumática, proporcionando alívio das tensões, redução de dores e otimização da performance de forma segura e eficiente.',
        image: fisioImage
      },
      {
        id: 2,
        title: 'Prevenção',
        description: 'Estratégia de prevenção que utiliza exercícios específicos para corrigir déficits identificados, reduzindo riscos de lesões e preparando o paciente para treinar ou competir com mais segurança e eficiência.',
        image: fisioImage
      },
      {
        id: 3,
        title: 'Reabilitação',
        description: 'A reabilitação é um processo preciso e individualizado, que restaura a funcionalidade, atua na melhora da dor e aprimora a forma como seu corpo se move. Exclusiva e fundamentada na ciência, essa abordagem une técnica e personalização para proporcionar equilíbrio, conforto e desempenho aprimorado.',
        image: fisioImage
      },
    ]
  },
  {
    id: 2,
    title: 'Ortopedia',
    subTitle: 'Diagnóstico e tratamento para dores e lesões',
    coverImg: ortopediaBanner,
    linkTxt: 'ortopedia',
    serviceDetail: [
      {
        id: 1,
        title: 'Ortopedia',
        description: 'Cuidado avançado para a estrutura e a mecânica do corpo. Nosso serviço de ortopedia combina conhecimento especializado e tecnologia de ponta para diagnosticar, tratar e prevenir disfunções com máxima precisão. A abordagem é estratégica e individualizada, preservando a integridade do movimento e promovendo uma recuperação sólida, segura e definitiva.',
        image: fisioImage
      }
    ]
  },
  {
    id: 3,
    title: 'Medicina do Esporte',
    subTitle: 'Cuidados para atletas e esportistas de todos os níveis',
    coverImg: esporteBanner,
    linkTxt: 'medicina_esporte',
    serviceDetail: [
      {
        id: 1,
        title: 'Medicina do Esporte',
        description: 'A medicina esportiva cuida da saúde de quem pratica esportes, desde iniciantes até atletas de alta performance. Com foco na prevenção, no tratamento de lesões e na otimização do desempenho, alia conhecimento médico e tecnologia para garantir segurança, evolução e longevidade na prática esportiva.',
        image: fisioImage
      }
    ]
  },
  {
    id: 4,
    title: 'Nutrição',
    subTitle: 'Alimentação saudável para mais energia e bem-estar',
    coverImg: nutricaoBanner,
    linkTxt: 'nutricao',
    serviceDetail: [
      {
        id: 1,
        title: 'Nutrição',
        description: 'Alimentação como base para equilíbrio e desempenho. A nutrição vai além de dietas — é um cuidado estratégico que considera cada detalhe do seu metabolismo, promovendo energia, recuperação e bem-estar. Com um olhar preciso e abordagem personalizada, ajustamos sua alimentação para atender às necessidades do seu corpo, garantindo vitalidade e alta performance no dia a dia.',
        image: fisioImage
      }
    ]
  },
  {
    id: 5,
    title: 'Psicologia',
    subTitle: 'Saúde emocional e mental para uma vida mais equilibrada',
    coverImg: psicologiaBanner,
    linkTxt: 'psicologia',
    serviceDetail: [
      {
        id: 1,
        title: 'Psicologia',
        description: 'Equilíbrio mental para uma vida em alto nível. A psicologia vai além da escuta — é um trabalho estratégico que fortalece a mente, aprimora a tomada de decisões e promove bem-estar duradouro. Com uma abordagem precisa e individualizada, auxiliamos no desenvolvimento emocional e no aprimoramento da performance pessoal e profissional, garantindo clareza, resiliência e qualidade de vida.',
        image: fisioImage
      }
    ]
  },
]