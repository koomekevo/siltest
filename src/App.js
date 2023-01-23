import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import About from './components/About'
import SignUp from './components/SignUp'
import Account from './components/Account'

function App () {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
