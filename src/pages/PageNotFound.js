import React from 'react'
import { IoMdWarning } from "react-icons/io";

function PageNotFound() {
    return (
        <div style={{ height: "70vh" }} className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Opps! <IoMdWarning /></h1>
            <h3>4o4 page not found</h3>
            <p>We are sorry but this page is no longer available on our web site.</p>
            
        </div>
    )
}

export default PageNotFound
