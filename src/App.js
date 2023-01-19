import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App () {
  return (
    <div className='bg-cover bg-center bg-fixed h-screen w-full bg-[url("https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
      <Header />
      <Home />
    </div>
  )
}

export default App
