import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="pages container mx-auto p-5">
          <Routes>
            <Route path='/' element={<Home />} />  
          </Routes>        
        </div>
      </BrowserRouter>      
    </div>
  )
}

export default App
