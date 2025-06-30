import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Header from '../../components/Header'
import HomeBanner from '../../components/HomeBanner'
import HomeForm from '../../components/HomeForm'
import HomeFormBottom from '../../components/HomeFormBottom';
import HomeServices from '../../components/HomeServices'
import HomeAdvantages from '../../components/HomeAdvantages'
import HomeSpaceVideo from '../../components/HomeSpaceVideo'
import HomeRating from '../../components/HomeRating'
import HomeContact from '../../components/HomeContact'
import Footer from '../../components/Footer'
import WhatsappComponent from '../../components/WhatsappComponent'
import InstagramComponent from '../../components/InstagramComponent'

export default function InitialPage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const targetId = params.get("scrollTo")

    if(targetId) {
      setTimeout(() => {
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth"})
      }, 100)
    }

  }, [location])

  return (
    <main>
      <Header />
      <HomeBanner />
      {/* <HomeForm /> */}
      <HomeServices />
      <HomeAdvantages />
      <HomeSpaceVideo />
      <HomeRating />
      <HomeContact />
      <HomeFormBottom/>
      <Footer />
      <WhatsappComponent />
      <InstagramComponent/>
    </main>
  )
}
