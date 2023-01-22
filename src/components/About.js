import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <>
      <div className='bg-cover bg-center bg-fixed h-screen w-full bg-[url("https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
        <Header />
        <div className='flex justify-center items-center min-h-[80%]'>
          <div>
            <div className='flex text-6xl md:text-6xl font-bold justify-center items-center text-white'>
              <h1>
                ABOUT US
                <br />
              </h1>
            </div>
            <div className='text-4xl text-white text-center mt-8 text-justify'>
              <p>
                SILTest is an app that lets you manage your photo portfolio. It has an photo album feature that lets each user organize their memories based on special events such as weddings, graduations etc.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
