import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'

const Carousel = () => {
  
  // Define our count variable to further use on our slider buttons, get the productDetail on our store to display on our website, and declare a useState to
  // manage our array of images and the logic involved
  let count
  const productDetail = useSelector(state => state.productDetail)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Initialize our empty main array (carouselImages) to iterate on our JSX to display the slider images, then use a map to extract the exact url from
  // the product detail object that we want to push into our slider
  const carouselImages = []
  productDetail.images?.map(image => {
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
