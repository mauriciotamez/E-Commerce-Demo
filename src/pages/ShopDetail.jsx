import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import NavBar from '../Layout/NavBar'
import { getProductDetailThunk } from '../redux/actions'

const ShopDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const productDetail = useSelector(state => state.productDetail)
  console.log(productDetail)

  useEffect(() => {
    dispatch(getProductDetailThunk(id))
  }, [dispatch, id])

  return (
    <div className=' px-0 sm:pt-10 sm:px-10 md:pt-10 md:px-20  xl:pt-10 xl:px-44'>
      <NavBar />
      <div className='pt-40 px-0 lg:flex  '>
        <div className='basis-1/2'> <Carousel /> </div>
        <div className='basis-1/2 mx-20 '>
          <div className=''>
            <h1 className=' text-center text-2xl font-formal mt-10
               '
            > {productDetail.name}
            </h1>
          </div>
          <div>
            <h2 className='text-center font-bold font-formal pt-5
              '
            >{productDetail.price}$
            </h2>
          </div>
          <div>
            <p className='text-center text-sm px-4 pt-20 font-formal'>
              {productDetail.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail
