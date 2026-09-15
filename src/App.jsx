import {  Link } from 'react-router-dom'
import RouteComponent from './route/RouteComponent'

import './App.css'

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

    <RouteComponent/>

    </>
  )
}

export default App
