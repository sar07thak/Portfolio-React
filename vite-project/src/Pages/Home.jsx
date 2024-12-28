import React from 'react'
import { Herosection } from '../Components/Herosection'
import { Services } from '../Components/Services'
import { About } from '../Components/About'
import { Footer } from '../Components/Footer' 
// import AnimatedSVG from '../Components/AnimatedSVG.JSX'

export const Home = () => {
  return (
    <>
    <Herosection />
    <Footer />
    <Services />
    <About />
    <Footer />
    {/* <AnimatedSVG /> */}
    </>
  )
}
