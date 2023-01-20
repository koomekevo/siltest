import React from 'react'

const Form = () => {
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
      <h1 className='text-4xl font-semibold'>Sign In</h1>
      <p className='font-medium text-lg text-gray-500 mt-2'>
        Please enter your details.
      </p>
      <div className='mt-4'>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
            placeholder='Enter your Email'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Password</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
            placeholder='Enter your Password'
          />
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <button className='font-small text-violet'>Forgot Password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out rounded-xl bg-blue-900 text-white text-lg font-bold'>
            SIGN IN
          </button>
          <button>SIGN IN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  )
}

export default Form
