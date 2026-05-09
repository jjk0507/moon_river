import React from 'react'
import Nav from './home/Nav'
import Wrapper from './home/Wrapper'
import Aboutus from './home/Aboutus'
import Colections from './home/Colections'
import Carousel from './home/Carousel'
import Botsec from './home/Botsec'
import Location from './home/Location'
const Header = () => {
  return (
    <div>
     < Nav />
      <Wrapper />
      <Aboutus />
      <Location />
      <Colections />
      <Carousel />
      <Botsec />
    </div>
  )
}

export default Header
