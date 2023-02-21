import React from 'react'
import { Link } from 'react-router-dom'
import './categoies.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="/img/categories-1.jpg" alt="" />
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="/img/categories-2.jpg" alt="" />
                <button>
                    <Link to="/products/2" className='link'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row"><img src="/img/categories-3.jpg" alt="" />
                <button>
                    <Link to="/products/3" className='link'>Sale</Link>
                </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row"><img src="/img/categories-4.jpg" alt="" />
                <button>
                    <Link to="/products/4" className='link'>Sale</Link>
                </button></div>
                </div>
                <div className="col">
                    <div className="row"><img src="/img/categories-5.jpg" alt="" />
                <button>
                    <Link to="/products/5" className='link'>Sale</Link>
                </button></div>
                </div>
            </div>
            <div className="row">
            <img src="/img/categories-6.jpg" alt="" />
                <button>
                    <Link to="/products/6" className='link'>Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories