import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
const Layout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
