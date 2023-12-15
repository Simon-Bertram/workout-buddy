import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import RegisterUser from './pages/RegisterUser'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="pages container mx-auto p-5">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<RegisterUser />} />   
          </Routes>        
        </div>
      </BrowserRouter>      
    </div>
  )
}

export default App
