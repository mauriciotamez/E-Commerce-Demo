import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Layout/NavBar'

const MainLayout = () => {
  return (
    <div className='py-10 px-10 '>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout
