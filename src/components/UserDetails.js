import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { IoPerson } from "react-icons/io5";
import { showUser } from '../store/userSlice';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import './UserDetails.css'
function UserDetails() {
    const show = useSelector(state => state.user.userToggle)
    const userData = useSelector(state => state.user.userData)
    const dispatch = useDispatch()


    return (
        <>
            <div>
                <Offcanvas show={show} onHide={() => { dispatch(showUser()) }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>My Profile <IoPerson /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='userdetail'>
                        <h4 className='text-center'>{userData.name && (userData.name).toUpperCase()}</h4>
                        <div className='mt-5'>
                            <p><MdOutlineEmail /> <b>{userData.email}</b></p>
                            <p><MdOutlinePhone /> <b>{userData.contact}</b></p>
                            <p><IoLocation /> <b>{userData.address}</b></p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default UserDetails
