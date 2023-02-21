import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "/img/featured-products-5.jpg",
            isNew: true,
            title: "Fashion 1",
            oldPrice: 10,
            price: 9
        },
        {
            id: 2,
            img: "/img/featured-products-2.jpg",
            img2: "/img/featured-products-6.jpg",
            isNew: true,
            title: "Fashion 1",
            oldPrice: 12,
            price: 10
        },
        {
            id: 3,
            img: "/img/featured-products-3.jpg",
            img2: "/img/featured-products-7.jpg",
            isNew: false,
            title: "Fashion 1",
            oldPrice: 14,
            price: 10
        },
        {
            id: 4,
            img: "/img/featured-products-4.jpg",
            img2: "/img/featured-products-8.jpg",
            isNew: false,
            title: "Fashion 1",
            oldPrice: 19,
            price:12
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet voluptatibus accusantium inventore commodi ad, ipsam voluptatum aperiam, dolorem consequuntur placeat at, obcaecati deleniti qui velit corrupti numquam cupiditate sequi?
                Perspiciatis natus totam, quas perferendis adipisci nulla blanditiis distinctio? Recusandae, nulla vel dolor aperiam nostrum excepturi, necessitatibus expedita eaque quia deserunt dolore! Eos voluptate unde quasi consectetur commodi soluta porro!
            </p>
        </div>
        <div className="bottom">
            {data.map(item =>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts