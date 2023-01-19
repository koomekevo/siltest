import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App () {
  return (
    <div className='bg-cover bg-center bg-fixed h-screen w-full bg-[url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
      <Header />
      <Home />
    </div>
  )
}

export default App
