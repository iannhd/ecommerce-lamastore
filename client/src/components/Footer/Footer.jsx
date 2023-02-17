import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Link</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati, id amet veniam non a necessitatibus autem corrupti. Asperiores placeat ex dolorem excepturi ipsum odit, sed natus dicta quisquam reiciendis.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et assumenda dicta modi sit laboriosam enim minima consequuntur consequatur magni, impedit veritatis itaque perspiciatis cumque quas delectus vel animi sed earum?
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">Lamastore</span>
                <span className="copyright"> Copyright 2023</span>
            </div>
            <div className="left">
                <img src="/img/payments.png" width={300} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer