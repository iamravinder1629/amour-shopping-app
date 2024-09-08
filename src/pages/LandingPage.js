import React, { useEffect, useState } from 'react'
import './landingpage.css'
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { PiHandbagFill } from "react-icons/pi";

function LandingPage() {

    const navigate = useNavigate()
    const changePath = () => {
        navigate("/products")
    }

    // const images = ["image1", "image2"]
    // const [currentIndex, setCurrentIndex] = useState(["image1", "image2"]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeout(() => {
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //         }, 300);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    const images = ["image1", "image2","image3","image4","image5","image6","image7"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className={`image-container ${images[currentIndex]}`}>
            {/* <div className={currentIndex ? "image-container image1" : "image-container image2"}> */}

                <div className='col-lg-6 col-sm-12 col-md-8 col-12 landing-upper p-4 my-lg-5 my-md-5'>
                    <h1 className='mb-3'><i>Amour <PiHandbagFill /></i></h1>
                    <h5>Where Style Meets Passion</h5>
                    <p className='my-5'><i>"Welcome to Amour, your ultimate destination for fashion that speaks to your soul. Explore a curated collection of stylish, high-quality clothing designed to express your unique style and confidence. At Amour, we believe that fashion is more than just clothes it's a statement of who you are. Discover trends that inspire, outfits that elevate, and a shopping experience that’s as seamless as it is satisfying. Shop with Amour and fall in love with every piece."</i></p>
                    <button
                        className='btn btn-light p-2 text-center align-items-center d-flex'
                        onClick={changePath}>
                        <span className='mx-2'>View Store</span> <FaShoppingBag />
                    </button>
                </div>
            </div >
        </>
    )
}

export default LandingPage
