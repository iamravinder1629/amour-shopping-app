import React from 'react'
import { useSelector } from 'react-redux'
import DressCard from '../components/DressCard'
function Shoes() {
    const shoes = useSelector(state => state.dress.shoes)
    return (
        <>
            <div className='row m-0 d-flex justify-content-evenly'>
                {
                    shoes.map((item) => (
                        <DressCard key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    )
}

export default Shoes
