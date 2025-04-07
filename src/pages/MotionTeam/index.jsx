import React from 'react'

import Header from '../../components/Header'
import MotionTeamBanner from '../../components/MotionTeamBanner'
import MotionTeamSlider from '../../components/MotionTeamSlider'
import MotionProfileSection from '../../components/MotionProfileSection'
import Footer from '../../components/Footer'

export default function MotionTeam() {
  return (
    <div>
      <Header />
      <MotionTeamBanner />
      <MotionTeamSlider />
      <MotionProfileSection />
      <Footer />
    </div>
  )
}
