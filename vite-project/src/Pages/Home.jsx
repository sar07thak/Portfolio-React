import React from 'react'
import { Herosection } from '../Components/Herosection'
import { Services } from '../Components/Services'
import { About } from '../Components/About'
import { String } from '../Components/String' 
// import AnimatedSVG from '../Components/AnimatedSVG.JSX'

export const Home = () => {
  return (
    <>
    <Herosection />
    <String />
    <Services />
    <About />
    <String />
    {/* <AnimatedSVG /> */}
    </>
  )
}
