import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { showCart } from '../store/cartSlice'
import { showUser } from '../store/userSlice'
import { PiHandbagFill } from 'react-icons/pi';
import { CgMenuLeft } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';

function NavBar() {
    const dispatch = useDispatch();

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);

    const handleShow = () => setShowOffcanvas(true);

    const expand = "md";

    return (
        <>
            <Navbar expand={expand} className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <i>Amour <PiHandbagFill /></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-navbar-toggle" onClick={handleShow}>
                        <CgMenuLeft />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        show={showOffcanvas}  // Control the visibility of the Offcanvas
                        onHide={handleClose}  // Handles closing the Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton onClick={handleClose}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <i>Amour <PiHandbagFill /></i>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav className="m-auto my-2 my-lg-0">
                                    <NavLink
                                        to="home"
                                        onClick={handleClose}  // Close offcanvas on link click
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="products"
                                        onClick={handleClose}  // Close offcanvas on link click
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}
                                    >
                                        Store
                                    </NavLink>
                                    <NavLink
                                        to="shoes"
                                        onClick={handleClose}  // Close offcanvas on link click
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}
                                    >
                                        Shoes
                                    </NavLink>
                                    <NavLink
                                        to="dresses"
                                        onClick={handleClose}  // Close offcanvas on link click
                                        className={({ isActive }) => (isActive ? 'nav-link text-danger' : 'nav-link')}
                                    >
                                        Dresses
                                    </NavLink>
                                </Nav>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button
                                        onClick={() => dispatch(showCart())}
                                        className='btn btn-light btn-outline-dark'
                                    >
                                        <BsCart3 />
                                    </button>
                                    <button
                                        onClick={() => dispatch(showUser())}
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
    );
}

export default NavBar;
