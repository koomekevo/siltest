import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import Reset from './pages/Reset'
import Photos from './pages/Photos'
import Albums from './pages/Albums'
import UserAlbums from './pages/UserAlbums'

function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/users' element={<Users />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/useralbums' element={<UserAlbums />} />
      </Routes>
    </Router>
  )
}

export default App
