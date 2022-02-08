import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Cart, Login, Shop, ShopDetail } from './pages'

function App () {
  return (

    <HashRouter>
      <Routes>
        <Route>

          <Route path='/' element={<Login />} />

          <Route element={<ProtectedRoutes />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ShopDetail />} />
          <Route path='/cart' element={<Cart />} />

        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App
