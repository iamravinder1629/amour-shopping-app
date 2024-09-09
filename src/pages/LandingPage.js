import React, { useEffect, useState } from 'react'
import './landingpage.css'
import { FaShoppingBag } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate()
    const changePath = () => {
        navigate("/products")
    }

    const images = ["image1","image2", "image3", "image4", "image5"];
    const boxImage = ["box1", "box2", "box3"]
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
            <div className={`image-container image1  ${images[currentIndex]}`}>
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
            <div className={`image-container ${boxImage[box]}`}>

            </div>
        </>
    )
}

export default LandingPage
