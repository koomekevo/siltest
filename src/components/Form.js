import React from 'react'

const Form = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Please enter your details.</p>
      <div>
        <div>
          <label>Email</label>
          <input className='' placeholder='Enter your Email' />
        </div>
        <div>
          <label>Password</label>
          <input
            className=''
            placeholder='Enter your Password'
            type='password'
          />
        </div>
        <div>
          <div>
            <input type='checkbox' id='remember' />
            <label for='remember'>Remember for 10 days</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
