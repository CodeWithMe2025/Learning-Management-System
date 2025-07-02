import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return <>


    <Navbar/>

    <div className='my-16'>
 
      <Outlet/>

    </div>

    

  </>
}
