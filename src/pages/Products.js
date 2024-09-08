import React from 'react'
import { useSelector } from 'react-redux'
import DressCard from '../components/DressCard'

function Products() {
    const products = useSelector((state) => state.dress.products)
    return (
        <div className='row m-0 d-flex justify-content-evenly'>
            {
                products.map((item) => (
                    <DressCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Products
