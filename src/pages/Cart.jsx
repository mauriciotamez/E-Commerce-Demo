import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { buyCartThunk, deleteProductFromCartThunk, editProductQuantityThunk, getCartThunk } from '../redux/actions'

const Cart = () => {
  // Get the current cart state in our store and initialize useDispatch to further use with our actions
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // Get the user cart when the website loads
  useEffect(() => dispatch(getCartThunk()), [])

  // Increase quantity of the product selected on the onClick attached function, using an action giving the parameters required by the PUT method
  const increaseQuantity = (id, quantity) => {
    const product = {
      quantity: quantity + 1
    }
    dispatch(editProductQuantityThunk(id, product))
  }

  // Decrease quantity of the product selected on the onClick attached function, using an action giving the parameters required by the PUT method
  const decreaseQuantity = (id, quantity) => {
    const product = {
      quantity: quantity - 1
    }
    dispatch(editProductQuantityThunk(id, product))
  }

  const deleteProduct = (id) => {
    dispatch(deleteProductFromCartThunk(id))
  }

  const buyCart = () => {
    dispatch(buyCartThunk(cart))
  }
  // Iterate trough the cart to get the quantity of given item and multiply it by the product price
  const getPricesFromCart = cart.map(product => {
    return product.quantity * product.product.price
  })

  // Get the array with the prices and sum them all
  const totalPriceSum = getPricesFromCart.reduce((total, num) => total + num, 0)

  return (
    <>
      <div>
        <div className='pt-40 flex flex-col  2xl:mx-44'>
          {
        cart.map((product) => (
          <div className='text-center border-t-2 sm:py-4' key={product.product?.id}>
            <div>
              <div className='md:flex md:flex-row md:relative md:top-5'>
                <Link to={`/shop/${product.product?.id}`}>
                  <div className='md:flex md:relative md:left-10'>
                    <img className='md:w-36 md:relative md:inline-flex' src={product.product.images[0].url} alt='' />
                    <div className='md:relative md:top-16 md:left-10 md:text-xl text-lg '>
                      {product.product.name}
                    </div>
                  </div>
                </Link>
              </div>
              <div className='md:relative md:bottom-14 md:inline-block md:left-[15rem] my-5  '>
                {product.quantity > 0 &&
                  <button onClick={() => decreaseQuantity(product.id, product.quantity)} className='px-2 border-2 '>
                    -
                  </button>}
                <span className='px-3'>
                  {product.quantity}
                </span>
                <button onClick={() => increaseQuantity(product.id, product.quantity)} className='px-2 border-2  '>
                  +
                </button>
                <div className='md:relative md:left-20 md:bottom-[2.8rem] font-semibold mt-5'>
                  {product.product.price}$
                </div>
                <div>
                  <button className='relative border-2  px-3 mt-10 md:bottom-28 md:left-56 ' onClick={() => deleteProduct(product.id)}>
                    Delete from cart
                  </button>
                </div>
              </div>
            </div>
          </div>

        ))
      }
        </div>

      </div>
      {
      cart.length === 0 &&
        <div>
          <h1 className='text-4xl text-center py-24 font-formal'>No products found in your cart, add a product then come back.</h1>
        </div>
    }
      {
    cart.length >= 1 &&
      <div className='flex pl-32 pt-10 md:pl-[30rem] lg:pl-[45rem] xl:pl-[75rem]  '>
        <div className='inline-block'>
          Subtotal {totalPriceSum} $
        </div>
        <div className='pl-5'>
          <button className='bg-slate-300 px-10 font-semibold' onClick={buyCart}>
            PAY
          </button>
        </div>
      </div>
   }
    </>
  )
}

export default Cart
