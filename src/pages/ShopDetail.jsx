import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { addProductThunk, getProductDetailThunk } from '../redux/actions'

const ShopDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const productDetail = useSelector(state => state.productDetail)
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(getProductDetailThunk(id))
  }, [dispatch, id])


  // the function that triggers in our onClick, that adds that specific product via an action if item doesn't exist already in our cart 
  const addProduct = () => {
    
    const product = {
      product: id,
      quantity: quantity
    }
    
    isItemAlreadyOnTheCart ? dispatch(addProductThunk((product))) : alert('Item already in your cart')

  }
 
  const isItemAlreadyOnTheCart = cart.every(item => {
    if(item.product.id === productDetail.id) {
      return false
    } else {
      return true
    }
  })

  return (
    <div className=' px-0 sm:pt-10  md:pt-10 md:px-20  xl:pt-10 xl:px-44'>
      <div className='pt-20 px-0 lg:flex  '>
        <div className='basis-1/2'> <Carousel /> </div>
        <div className='basis-1/2 mx-20  2xl:my-16'>
          <div className=''>
            <h1 className=' text-center text-2xl font-formal mt-10'> {productDetail.name}
            </h1>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row justify-center py-5'>
              {
              quantity >= 2 &&
                <button className='px-2 border-2 ' onClick={() => setQuantity(quantity - 1)}>
                  -
                </button>
              }
              <div className='text-lg px-1'>{quantity}</div>
              <button className='px-2 border-2 ' onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button className='font-formal py-1 border-2  ' onClick={addProduct}>Add to cart</button>
          </div>
          <div>
            <h2 className='text-center font-bold font-formal pt-5'>{productDetail.price}$
            </h2>
          </div>
          <div>
            <p className='text-center text-sm px-4 pt-10 font-formal'>
              {productDetail.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail
