import React from 'react'

const Slider = () => {
     const data = [
        '/img/pexels-cottonbro-studio-4067753',
        '/img/pexels-cottonbro-studio-4067757',
        '/img/pexels-cottonbro-studio-4067765'
     ]
  return (
    <div className='slider'>
        <div className="container">
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon"></div>
            <div className="icon"></div>
        </div>
    </div>
  )
}

export default Slider