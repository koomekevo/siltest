import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import About from './components/About'

function App () {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/signin' element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
