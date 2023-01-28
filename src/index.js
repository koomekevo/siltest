import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

// 799264714097-dbodgnk76i1ce9rh9md2hi1cjhvoud1a.apps.googleusercontent.com

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='799264714097-dbodgnk76i1ce9rh9md2hi1cjhvoud1a.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
