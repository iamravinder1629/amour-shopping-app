import React from 'react'
import { useSelector } from 'react-redux'
import DressCard from '../components/DressCard'
function Dresses() {
    const dresses = useSelector(state => state.dress.dresses)
    return (
        <>
            <div className='row m-0 d-flex justify-content-center'>
                {
                    dresses.map((item) => (
                        <DressCard key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    )
}

export default Dresses
