import React from 'react'
import Header from './Header'
import Form from './Form'

const Login = () => {
  return (
    <>
      <Header />
      <div className='flex w-full h-screen max-h-[36.5rem]'>
        <div className='w-full flex justify-center items-center lg:w-1/2'>
          <Form />
        </div>
        <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200 bg-[url("https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")]' />
      </div>
    </>
  )
}

export default Login
