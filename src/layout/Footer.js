import React from 'react'
import { PiHandbagFill } from "react-icons/pi";
import './footer.css'
import { useNavigate } from 'react-router-dom';
function Footer() {
    const navigate = useNavigate();
    return (
        <div className='p-3 p-sm-5 footer m-0 mt-5'>
            <h3><i>Amour <PiHandbagFill /></i> </h3>
            <ul className='my-4 d-flex list-unstyled justify-content-around'>

                <li className='list' onClick={() => { navigate("home") }}>Home</li>
                <li className='list' onClick={() => { navigate("products") }}>Store</li>
                <li className='list' onClick={() => { navigate("dresses") }}>Dresses</li>
                <li className='list' onClick={() => { navigate("shoes") }}>Shoes</li>
            </ul>
            <div className='d-flex justify-content-center achor align-items-center my-3'>
                <a
                    // href="https://www.instagram.com/oye_ravinder1629?igsh=NTc4MTIwNjQ2YQ==" target='blank'>
                    href="https://www.instagram.com/utk4rsha?igsh=YXltbmRxaXJxbzF2"
                    target='blank'>
                    instagram</a>
                <p className='m-3'>x</p>
                <a href="*">facebook</a>
                <p className='m-3'>x</p>
                <a href="*">Tweeter</a>
            </div>
        </div>
    )
}

export default Footer
