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

    return (
        <>
            <div className='image-container image-container-first image1'>
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
                className="image-container image-container-second">
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
        </>
    )
}

export default LandingPage
