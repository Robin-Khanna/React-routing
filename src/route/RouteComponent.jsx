import { Route } from "react-router-dom"
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Login from '../pages/login/Login'
import Shop from '../pages/shop/Shop'
import Product from '../pages/product/Product'

import Rout from '../hooks/Rout'


function RouteComponent({
    path,
    element,
}) {
  return (
    <>
    
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shop' element={<Rout> <Shop/> </Rout>}/>
      <Route path='/product/:productId' element={ <Product/> }/>
    </>

    </>
  )
}

export default RouteComponent