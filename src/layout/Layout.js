import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Cart from '../components/Cart'
import UserDetails from '../components/UserDetails'
function Layout() {
    return (
        <>
            <NavBar />
            <Cart />
            <UserDetails />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
