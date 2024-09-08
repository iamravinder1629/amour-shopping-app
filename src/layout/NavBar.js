import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { PiHandbagFill } from "react-icons/pi";
import { showCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgMenuLeft } from "react-icons/cg";
import { showUser } from '../store/userSlice'
function NavBar() {
    const dispatch = useDispatch()
    const expand = "md"
    return (
        <>
            <Navbar expand={expand} className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand> <i>Amour <PiHandbagFill /></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
                        className="custom-navbar-toggle"
                    >
                        <CgMenuLeft />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                <i>Amour <PiHandbagFill /></i>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav
                                    className="m-auto my-2 my-lg-0"
                                >
                                    <NavLink
                                        to="home"
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}
                                    >Home</NavLink>
                                    <NavLink
                                        to="products"
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}>Store</NavLink>
                                    <NavLink
                                        to="shoes"
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}>Shoes</NavLink>
                                    <NavLink
                                        to="dresses"
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}>Dresses</NavLink>
                                   
                                </Nav>

                                <div className="d-flex justify-content-center align-items-center">
                                    <button
                                        onClick={
                                            () => {
                                                dispatch(showCart())
                                            }}
                                        className='btn btn-light btn-outline-dark'
                                    >
                                        <BsCart3 />
                                    </button>

                                    <button
                                        onClick={
                                            () => {
                                                dispatch(showUser())
                                            }}
                                        className='btn btn-light btn-outline-dark mx-2'
                                    >
                                        <IoPerson />
                                    </button>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
