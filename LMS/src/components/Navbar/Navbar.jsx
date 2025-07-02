import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Navbar() {
  return <>
      

<nav className="bg-violet-600 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 mb-3">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LMS</span>


    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">

        <li>
          <NavLink to="signup" className="block py-2 px-3 text-white md:p-0">Signup</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

  </>
}
