import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './pages/landingpages/header'
import Hero from './pages/landingpages/hero'
import Feature from './pages/landingpages/feature'
import AboutUs from './pages/landingpages/aboutus'
import Join from './pages/landingpages/join'
import Services from './pages/landingpages/services'
import Donate from './pages/landingpages/donate'
import Testimonials from './pages/landingpages/testimonials'
import Partners from './pages/landingpages/partners'
import Events from './pages/landingpages/events'
import Footer from './pages/landingpages/footer'

import '../public/css/style.css'
import './App.css'
function App() {
  return (
  <>
  <Header/>
  <main>
    <article>
     <Hero/>
     <Feature/>
     <AboutUs/>
     <Join/>
     <Services/>
     <Donate/>
     <Testimonials/>
     <Partners/>
     <Events/>
     <Footer/>
    </article>
    </main>
  </>
  )
}

export default App
