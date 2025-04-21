import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitialPage from './pages/InitialPage'
import MotionTeam from './pages/MotionTeam'
import StoreProvider from './context/store'
import ServicePage from './pages/ServicePage'
import ThankyouPage from './pages/ThankyouPage'
import './global.style.scss'

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage/>} />
          <Route path='/nosso_time' element={<MotionTeam/>} />
          <Route path='/agradecimento' element={<ThankyouPage/>} />
          <Route path='/servicos/:service' element={<ServicePage/>} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}
