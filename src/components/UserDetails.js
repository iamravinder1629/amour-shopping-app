import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { IoPerson } from "react-icons/io5";
import { showUser } from '../store/userSlice';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import './UserDetails.css'
import { useNavigate } from 'react-router-dom';
function UserDetails() {
    const show = useSelector(state => state.user.userToggle)
    const userData = useSelector(state => state.user.userData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goBack = () => {
        navigate("")
    }

    return (
        <>
            <div>
                <Offcanvas show={show} onHide={() => { dispatch(showUser()) }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>My Profile <IoPerson /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='userdetail'>
                        {userData.name ?
                            <div>
                                <h4 className='text-center'>
                                    {userData.name && (userData.name).toUpperCase()}
                                </h4>
                                <div className='mt-5'>
                                    <p>{userData.email && <><MdOutlineEmail /> <b>{userData.email}</b></>}</p>
                                    <p>{userData.contact && <><MdOutlinePhone /> <b>{userData.contact}</b></>}</p>
                                    <p>{userData.address && <><IoLocation /> <b>{userData.address}</b></>}</p>
                                </div>
                                <button
                                    onClick={goBack}
                                    className='btn btn-outline-dark w-100 rounded-0 mt-4 mt-2'>
                                    Edit details
                                </button>
                            </div> :
                            <button
                                onClick={goBack}
                                className='btn btn-outline-dark w-100 rounded-0 mt-4 mt-2'>
                                Enter details
                            </button>
                        }
                    </Offcanvas.Body>
                </Offcanvas>

            </div>
        </>
    )
}

export default UserDetails
