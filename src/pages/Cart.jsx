import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../redux/actions';

const Cart = () => {
  
  const dispatch = useDispatch()
  const cart = useSelector( state => state.cart)
  console.log(cart);
  
  useEffect(() =>  dispatch(getCartThunk()), []);
  return (
    <div>
      <h1>cart</h1>
     <ul>
      {
        cart.map(product => (
         <li key={product.product?.id}> <Link to={`/shop/${product.product?.id}`} >{product.product.name}</Link></li>
        ))
      }
      </ul>
    </div>
    )
}

export default Cart
