import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='bg-cover bg-center bg-fixed h-screen w-full bg-[url("https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
        <Header />
        <div className='md:flex justify-center items-center min-h-[80%]'>
          <div>
            <div className='flex text-6xl md:text-6xl font-bold text-white text-center mt-8'>
              <p>
                Your Ultimate Photography Directory.
                <br />
              </p>
            </div>
            <div className='text-4xl text-white text-center mt-4'>
              <p>
                Manage your photo portfolio with our user friendly app.
                <br />
                <br />
              </p>
            </div>
            <div className='flex justify-center space-x-8'>
              <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-96 px-4 rounded-full'>
                <NavLink to='/Login' exact>
                  SIGN IN
                </NavLink>
              </button>
              <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-96 px-4 rounded-full'>
                <NavLink to='/About' exact>
                  ABOUT US
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
