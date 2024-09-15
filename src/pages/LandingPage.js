import React, { useEffect, useState } from 'react'
import './landingpage.css'
import { FaShoppingBag } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import vertical1 from '../assets/next2.2.jpg'
import vertical2 from '../assets/next3.jpg'
function LandingPage() {

    const navigate = useNavigate()
    const changePath = () => {
        navigate("/products")
    }

    const images = [
        require('../assets/b1.jpg'),
        require('../assets/b22.png'),
        require('../assets/b6.jpg'),
        require('../assets/b7.jpg'),
        require('../assets/b8.jpg'),
        require('../assets/b9.jpg'),
    ];
    const boxImage = [
        require('../assets/sec-box.jpg'),
        require('../assets/sec-box2.jpg'),
        require('../assets/sec-box3.jpg'),
        require('../assets/sec-box4.jpg'),
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [box, setbox] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setbox((prevIndex) => (prevIndex + 1) % boxImage.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length, boxImage.length]);

    return (
        <>
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className={`image-container image1`}>
                <div className='text-light'>
                    <h1 className='mb-3 text-area'><i>Amour <PiHandbagFill /></i></h1>
                    <p className=''>Wear Your Story</p>
                    <button
                        className='text-area btn-sm btn btn-outline-light 
                        rounded-0 justify-content-center align-items-center d-flex'
                        onClick={changePath}>
                        <span className='mx-2'>View Store</span> <FaShoppingBag />
                    </button>
                </div>
            </div >
            <div
                style={{ backgroundImage: `url(${boxImage[box]})` }}
                className="image-container">

            </div>
            <div className="row m-0">
                <div
                    style={{ backgroundImage: `URL(${vertical1})` }}
                    className="col-6 image-container">

                </div>
                <div
                    style={{ backgroundImage: `URL(${vertical2})` }}
                    className="col-6 image-container">

                </div>
            </div>
            {/* <div
                style={{ backgroundImage: `URL(${vertical1})` }}
                className="image-container">
            </div> */}

        </>
    )
}

export default LandingPage
