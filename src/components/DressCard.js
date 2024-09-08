import React, { useState } from 'react'
import './DressCard.css'
import Modal from 'react-bootstrap/Modal';
import { PiHandbagFill } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'
import Loader from './Loader'
import { showCart } from '../store/cartSlice'
function DressCard({ item }) {
    const dispatch = useDispatch()

    const handleCart = (item) => {
        dispatch(addToCart(item));
        dispatch(showCart());
    };



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="true"
                keyboard={false}
                className='blur'
            >
                <Modal.Header closeButton className='rounded-0'>
                    <Modal.Title>
                        <i>Amour <PiHandbagFill /></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center rounded-0'>
                    <img src={item.image} alt="" height="auto" width="90%" />
                    <h6 className='my-3'>{item.name}</h6>
                    <p>"{item.description}"</p>
                    <div className='d-flex justify-content-around align-items-center'>
                        <p>price: <b>{item.price}$</b></p>
                        <button
                            className='btn btn-outline-dark rounded-0'
                            onClick={() => { handleCart(item) }}
                        >add to cart</button>
                    </div>

                </Modal.Body>
            </Modal>
            <div className='col-lg-3 col-md-5 col-11 m-3 p-3 my-card'>
                {item.image ?
                    <img src={item.image} alt="" height={"auto"} width={'100%'} /> :
                    <Loader />
                }
                <h5 className='mt-4'>{item.name}</h5>
                <p>{item.price}$</p>
                <div className=''>
                    <button
                        className='btn btn-outline-dark rounded-0'
                        onClick={() => { handleShow() }}
                    >more</button>
                    <button
                        className='btn btn-outline-dark rounded-0 float-end'
                        onClick={() => { handleCart(item) }}
                    >add to cart</button>
                </div>
            </div >
        </>
    )
}

export default DressCard
