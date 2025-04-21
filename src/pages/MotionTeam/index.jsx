import React from 'react'

import Header from '../../components/Header'
import MotionTeamBanner from '../../components/MotionTeamBanner'
import MotionTeamSlider from '../../components/MotionTeamSlider'
import MotionProfileSection from '../../components/MotionProfileSection'
import Footer from '../../components/Footer'
import WhatsappComponent from '../../components/WhatsappComponent'
import InstagramComponent from '../../components/InstagramComponent'

export default function MotionTeam() {
  return (
    <div>
      <Header />
      <MotionTeamBanner />
      <MotionTeamSlider />
      <MotionProfileSection />
      <Footer />
      <WhatsappComponent />
      <InstagramComponent />
    </div>
  )
}
