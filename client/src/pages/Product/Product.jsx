import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Product = () => {

  const [img, selectedImg] = useState(0)
  const [qty, setQty] = useState(1)

  const images = [
    "/img/product-1.jpg",
    "/img/product-2.jpg",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => selectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e) => selectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[img]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>
          $199
        </span>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, soluta consectetur dicta, autem nostrum optio perferendis non asperiores neque, reiciendis ipsa maiores harum. Totam sed et quidem consequuntur tenetur dolor.
        </p>
        <div className="quantity">
          <button onClick={() => setQty(prev => prev ===  1 ? 1 : prev -1 )}>-</button>
          {qty}
          <button onClick={() => setQty(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
            <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> Add To Wishlist
          </div>
          <div className="item">
            <AccountBalanceWalletIcon/> Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product Type : T-Shirt</span>
          <span>Tag : T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product