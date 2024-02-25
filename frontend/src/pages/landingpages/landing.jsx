import React from 'react'
import Hero from './hero'
import Feature from './feature'
import AboutUs from './aboutus'
import Join from './join'
import Services from './services'
import Donate from './donate'
import Testimonials from './testimonials'
import Partners from './partners'
import Events from './events'
import Footer from './footer'
import Header from './header'

const Landing = () => {
  return (
    <div>
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
      </div>
  )
}

export default Landing;