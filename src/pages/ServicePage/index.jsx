import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ServiceBanner from '../../components/ServiceBanner'
import ServiceSlider from '../../components/ServiceSlider'
import Footer from '../../components/Footer'
import services from '../../services/api_services'

export default function ServicePage() {
  const { service } = useParams()
  const serviceItem = services.find((i) => i.linkTxt === service)

  return (
    <div>
      <Header />
      <ServiceBanner title={serviceItem.title} />
      <ServiceSlider specList={serviceItem.serviceDetail} />
      <Footer/>
    </div>
  )
}
