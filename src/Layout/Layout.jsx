import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function Layout() {
  return (
    <div className='max-w-7xl mx-auto font-poppins'>

    <Home></Home>
    <Outlet></Outlet>
    </div>
  )
}

export default Layout