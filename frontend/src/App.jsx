import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'

// Pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import RegisterUser from './pages/RegisterUser'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="pages container mx-auto p-5">
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} /> 
            <Route path='/register' element={!user ? <RegisterUser /> : <Navigate to="/" />} />   
          </Routes>        
        </div>
      </BrowserRouter>      
    </div>
  )
}

export default App
