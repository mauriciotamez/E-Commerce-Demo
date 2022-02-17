import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'
import { filterCategoryThunk, filterProductThunk, getCategoriesThunk, getShopListThunk } from '../redux/actions'

const Shop = () => {
  const dispatch = useDispatch()

  const shopList = useSelector(state => state.shopList)
  

  const categories = useSelector(state => state.categories)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getShopListThunk())
    dispatch(getCategoriesThunk())
  }, [dispatch])

  const filterCategory = id => dispatch(filterCategoryThunk(id))
  const filterProduct = e => {
    dispatch(filterProductThunk(search))
    console.log(search)
  }

  return (
    <div className='py-10 px-1  '>
      <div className='flex-column justify-center pt-10'>
        <div className='flex justify-center'>
          {
                categories.map(category => (
                  <div key={category.id} className='px-2 pb-6  border-r-[1px] h-3 border-gray-300'>
                    <button className='text-md font-formal' onClick={() => filterCategory(category.id)}>
                      {category.name}
                    </button>
                  </div>
                ))
              }
        </div>
        <div className='pt-10 -pl-12'>
          <div className='flex justify-center'>
            <form onSubmit={filterProduct} className='pt-20 pl-12 '>
              <input
                className=' appearance-none border-2 outline-none px-2 font-formal	 border-slate-600  bg-[#faf8f0]'
                type='text' value={search} onChange={e => setSearch(e.target.value)}
              />
              <button className='pl-5 relative top-2 font-one font-semibold'><GrFormSearch size={25} /></button>
            </form>
          </div>
        </div>
      </div>
      <main className='pt-20 '>
        <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  border-t-[1px] border-slate-500
            border-opacity-50 '
        >
          {
              shopList.map(product => (

                <Link
                  to={`/shop/${product.id}`}
                  key={product.id}
                >
                  <div className='pt-20 pb-10 relative'>
                    <div>
                      <img className='w-full h-full ' src={product.images[0]?.url} alt='' />
                    </div>
                    <div className='absolute top-12  duration-500 opacity-0 hover:opacity-100'>
                      <img className='w-full h-full ' src={product.images[1]?.url} alt='' />
                    </div>

                    <h2 className='pt-5 text-lg text-center font-formal'>
                      {product.name}
                    </h2>
                    <h3 className=' text-center'>
                      {product.price}$
                    </h3>
                  </div>
                </Link>
              ))
            }

        </div>
      </main>
    </div>
  )
}

export default Shop
