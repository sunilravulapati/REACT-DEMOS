import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header />
        <div className='text-2xl mx-20 min-h-screen'>
            {/* component placeholder */}
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout