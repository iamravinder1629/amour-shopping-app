import React, { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../store/cartSlice'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { decrementQuantity, addToCart } from '../store/cartSlice'
import './cart.css'
function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);

    const handleIncrement = (item) => {
        dispatch(addToCart(item))
    }
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculatedTotal = cart.cartData.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);
        setTotal(calculatedTotal);
    }, [cart.cartData]);
    
    return (
        <div>
            <Offcanvas show={cart.cartToggle} onHide={() => { dispatch(showCart()) }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart   <BsCart3 /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='cart-body'>

                    {
                        cart.cartData.length === 0 ?
                            <h3 className='text-center'>Cart is Empty</h3>
                            :
                            <>
                                <h6>Total: <b>{total.toFixed(2)}$</b></h6>
                                {
                                    cart.cartData.map((item) =>
                                        <div key={item.id}
                                            className='d-flex justify-content-around border-top mb-5 p-2 cart'>
                                            <img src={item.image} alt="" height={120} />
                                            <div className='w-100 mx-2 flex-column d-flex justify-content-center'>
                                                <h6 className='my-2'>{item.name}</h6>
                                                <p className='mb-2'>Unit price: <b>{item.price}$</b></p>
                                                <p className='mb-2'>Total: <b>{(item.quantity * item.price).toFixed(2)}$</b></p>
                                            </div>
                                            <div className=' text-center align-items-center flex-column'>
                                                <button
                                                    className="cart-button btn p-2"
                                                    onClick={() => { handleIncrement(item) }}
                                                ><IoIosAddCircleOutline /></button>
                                                <p className='my-1'><b>{item.quantity}</b></p>
                                                <button
                                                    className="cart-button btn p-2"
                                                    onClick={() => { dispatch(decrementQuantity(item)) }}
                                                ><CiCircleMinus /></button>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart
