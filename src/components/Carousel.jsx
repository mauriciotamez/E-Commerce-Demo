import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'

const Carousel = () => {
  let count
  const productDetail = useSelector(state => state.productDetail)
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselImages = []
  const carouselImagess = productDetail.images?.map(image => {
    const url = image.url
    return carouselImages.push(url)
  })

  const handleOnNextClick = () => {
    const imagesArrayLength = carouselImages.length
    count = (currentIndex + imagesArrayLength + 1) % imagesArrayLength
    setCurrentIndex(count)
  }

  const handleOnPrevClick = () => {
    const imagesArrayLength = carouselImages.length
    count = (currentIndex + imagesArrayLength - 1) % imagesArrayLength
    setCurrentIndex(count)
  }

  return (
    <div className='max-w-screen-xl  m-auto'>
      <div className='w-full  lg:max-w-lg  relative select-none'>
        <div className='aspect-w-1 aspect-h-1    '>
          <img className='' src={carouselImages[currentIndex]} alt='' />
        </div>
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3'>
          <button
            className='bg-black ml-5 text-white p-1 rounded-full
            bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={25} />
          </button>
          <button
            className='bg-black mr-5 text-white p-1 rounded-full
            bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
