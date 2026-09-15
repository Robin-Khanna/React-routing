import {  Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'

function App() {
  return (
    <>
    
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/login'>Login</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/product'>Product</Link>
    </nav>

    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
