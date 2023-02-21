import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import './Slider.scss'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

     const data = [
        '/img/pexels-anastasiya-gepp-1462637.jpg',
        '/img/pexels-clem-onojeghuo-175696.jpg',
        '/img/pexels-elle-hughes-1549200.jpg'
     ]

     const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
     }

     const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
     }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider