import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import MainLayout from './components/MainLayout'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Cart, Login, Shop, ShopDetail } from './pages'

function App () {
  return (

    <HashRouter>
      
      <Routes>
        
        <Route path='/login' element={<Login />} />
        
        <Route path='/' element={<Navigate to="/shop" />} />
          
          <Route element={<ProtectedRoutes />} >
            <Route element={<MainLayout/>} >
                <Route path='/shop' element={<Shop />} />
                <Route path='/shop/:id' element={<ShopDetail />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
          </Route>
        
      </Routes>
    </HashRouter>

  )
}

export default App
