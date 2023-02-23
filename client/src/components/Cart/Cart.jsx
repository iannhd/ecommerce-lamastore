import React from 'react'
import './cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id: 1,
            img: '/img/list-1.jpg',
            title: "list 1",
            oldPrice: 30,
            price:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque ab ipsa consectetur eos soluta."
        },
        {
            id: 2,
            img: '/img/list-2.jpg',
            title: "list 2",
            oldPrice: 30,
            price:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque ab ipsa consectetur eos soluta."
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description.substring(0,20)}...</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>Subtotal </span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart