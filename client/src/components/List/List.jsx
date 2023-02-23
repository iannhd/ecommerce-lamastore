import React from 'react'
import './list.scss'
import Card from '../Card/Card'
const List = () => {

    const data = [
        {
            id: 1,
            img: '/img/list-1.jpg',
            title: "list 1",
            oldPrice: 30,
            price:20
        },
        {
            id: 2,
            img: '/img/list-2.jpg',
            title: "list 2",
            oldPrice: 30,
            price:20
        },
        {
            id: 3,
            img: '/img/list-3.jpg',
            title: "list 3",
            oldPrice: 20,
            price:10
        },
        {
            id: 4,
            img: '/img/list-4.jpg',
            title: "list 4",
            oldPrice: 26,
            price:20
        },
        // {
        //     id: 5,
        //     img: '/img/list-1.jpg',
        //     title: "list 4",
        //     oldPrice: 26,
        //     price:20
        // },
        // {
        //     id: 6,
        //     img: '/img/list-2.jpg',
        //     title: "list 4",
        //     oldPrice: 26,
        //     price:20
        // },
        // {
        //     id: 7,
        //     img: '/img/list-3.jpg',
        //     title: "list 4",
        //     oldPrice: 26,
        //     price:20
        // },
        // {
        //     id: 8,
        //     img: '/img/list-4.jpg',
        //     title: "list 4",
        //     oldPrice: 26,
        //     price:20
        // },
    ]
  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List