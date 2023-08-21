import React from 'react'
import NavbarLogin from '../Utility/NavbarLogin'
import { Outlet } from 'react-router-dom'
import Footer from '../Utility/Footer'

export default function Layout() {
  return (<>
    <NavbarLogin/>
    <Outlet/>
    <Footer/>
  </>
    

  )
}
