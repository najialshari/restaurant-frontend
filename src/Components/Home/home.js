import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import home1 from '../../Images/home1.png'
import home2 from '../../Images/home2.jpg'
import './home.css'
import Menu from '../menu/menu';
function Home() {
  // const [emblaRef] = useEmblaCarousel()
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className='homePage'>
      <div className="home" ref={emblaRef}>
        <div className="slideContainer">
          <div className="slideImage"><img src={home1} alt='' /></div>
          <div className="slideImage"><img src={home2} alt='' /></div>
        </div>
      </div>
      <Menu/>
    </div>
  )
}

export default Home
