import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import home1 from '../../Images/home1.png'
import home2 from '../../Images/home2.jpg'
import './home.css'
import Menu from '../menu/menu';
import HomePage from '../HomePage/HomePage';
function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className='homePage0'>
      
      <div className="home" ref={emblaRef}>
        <div className="slideContainer">
          <div className="slideImage"><img src={home1} alt='HOME1' /></div>
          <div className="slideImage"><img src={home2} alt='HOME2' /></div>
        </div>
      </div>
      <HomePage />
      <Menu/>
    </div>
  )
}

export default Home
