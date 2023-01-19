import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'

function App () {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact-us' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
