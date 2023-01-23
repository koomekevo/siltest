import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode' // eslint-disable-line
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse)
      const decoded = jwt_decode(tokenResponse)
      console.log(decoded)
    }
  })

  return (
    <div className='bg-white px-5 py-10 rounded-3xl border-2 border-gray-100'>
      <h1 className='text-3xl font-semibold'>Sign Up</h1>
      <p className='font-medium text-lg text-gray-500 mt-2'>
        Please enter your details.
      </p>
      <div className='mt-4'>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your Email'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your Password'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Confirm Password</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-1 mt-1 bg-transparent'
            placeholder='Enter your Password'
          />
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out rounded-xl bg-blue-900 text-white text-lg font-bold'>
            SIGN UP
          </button>
          <button
            className='flex border-2 border-gray-100 rounded-xl items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'
            onClick={() => login()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 50 50'
              width='25px'
              height='25px'
            >
              <path d="M25.004,22.006l16.025,0.022C42.427,28.656,39.87,42,25.004,42C15.613,42,8,34.389,8,25S15.613,8,25.004,8	c4.411,0,8.428,1.679,11.45,4.432l-4.785,4.783c-1.794-1.536-4.118-2.47-6.665-2.47c-5.664,0-10.256,4.591-10.256,10.254	s4.592,10.254,10.256,10.254c4.757,0,8.046-2.816,9.256-6.752h-9.256V22.006z" /> {/* eslint-disable-line */}
            </svg>
            SIGN UP WITH GOOGLE
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>
            Already have an account?{' '}
            <Link to='/SignIn' className='text-blue-900' exact>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm