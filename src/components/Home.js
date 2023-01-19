import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center min-h-[80%]'>
        <div>
          <div className='flex text-6xl md:text-6xl font-bold text-white'>
            <p>
              Your Ultimate Photography Directory.
              <br />
            </p>
          </div>
          <div className='text-4xl text-white text-center'>
            <p>
              Manage your photo portfolio with our user friendly app.
              <br />
              <br />
            </p>
          </div>
          <div className='flex justify-center space-x-8'>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-96 px-4 rounded-full'>
              SIGN IN
            </button>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-96 px-4 rounded-full'>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
