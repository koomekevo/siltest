import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../firebase'
import Logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav class='bg-white opacity-80 border-black border-b-2 px-2 sm:px-4 py-2.5 dark:bg-gray-900'>
      <div class='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' class='flex items-center'>
          <img src={Logo} class='h-6 mr-3 sm:h-9' alt='SILTest Logo' />
          <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            SILTest
          </span>
        </a>
        <div class='flex md:order-2'>
          <button
            type='button'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <NavLink to='/SignIn' onClick={logout} exact>
              SIGN OUT
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
