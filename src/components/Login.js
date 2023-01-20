import React from 'react'
import Header from './Header'
import Form from './Form'

const Login = () => {
  return (
    <>
      <Header />
      <div className='flex w-full h-screen'>
        <div className='w-full flex justify-center items-center lg:w-1/2'>
          <Form />
        </div>
        <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200' />
      </div>
    </>
  )
}

export default Login
