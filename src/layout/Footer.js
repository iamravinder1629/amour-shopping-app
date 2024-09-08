import React from 'react'
import { PiHandbagFill } from "react-icons/pi";
import './footer.css'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div class="container-fluid bg-light m-0 p-0">
            <footer className='p-4'>
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4">
                            <h5 class="mb-3 text-dark"><i>Amour <PiHandbagFill /></i> </h5>
                            <p>
                                Founded in 2024 by Bansal’s Group and owned by
                                <a
                                    href="https://www.instagram.com/utk4rsha?igsh=YXltbmRxaXJxbzF2"
                                    target='blank'
                                    className='mx-1 text-decoration-none text-danger'
                                ><b>
                                        Utkarsha Bansal
                                    </b></a>, Amour offers premium fashion. Explore our exclusive range of stylish clothing and accessories, crafted to elevate your style
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <h5 class="mb-3 text-dark">Menu</h5>
                            <ul class="list-unstyled mb-0" style={{ cursor: "pointer" }}>
                                <li class="mb-1">
                                    <i onClick={() => { navigate("home") }}>Home</i>
                                </li>
                                <li class="mb-1">
                                    <i onClick={() => { navigate("dresses") }}>Dresses</i>
                                </li>
                                <li class="mb-1">
                                    <i onClick={() => { navigate("products") }}>Store</i>
                                </li>
                                <li>
                                    <i onClick={() => { navigate("shoes") }}>Shoes</i>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <h5 class="mb-1 text-dark">opening hours</h5>
                            <table class="table"
                                style={{ borderColor: "#666" }}
                            >
                                <tbody>
                                    <tr>
                                        <td>Mon - Fri:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sat - Sun:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3 bg-dark text-light">
                    © 2024 Copyright:
                </div>
            </footer>

        </div>

    )
}

export default Footer
