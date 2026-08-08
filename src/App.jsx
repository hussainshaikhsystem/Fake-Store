import React from 'react'
import Navbar from './components/Navbar'

import { Routes , Route} from 'react-router-dom'
import Products from './components/Products'
import Cartitems from './components/Cartitems'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
   
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cartitems/>}></Route>
      </Routes>
    </div>
  )
}

export default App
