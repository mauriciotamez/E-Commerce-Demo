import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPinterestSquare } from 'react-icons/fa'
import { GiShoppingCart, GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  const navigate = useNavigate()
  const [isHamburgerActive, setIsHamburgerActive] = useState(false)

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
  }

  return (

    <div className='  md:pt-16 md:px-20 2xl:px-48  md:flex justify-between align-middle'>
      <div className='hidden md:block'>
        <button className='relative right-5'>
          <AiFillInstagram size={20} />
        </button>
        <button>
          <FaPinterestSquare size={20} />
        </button>
      </div>
      <div>
        <a href='/shop' className=' font-formal font-light cursor-pointer text-4xl relative left-[6rem] bottom-1 md:relative md:bottom-8 md:left-0 md:top-0'>Anise</a>
      </div>
      <div className='hidden md:block'>
        <button className='relative right-5' onClick={() => navigate('/cart')}>
          <GiShoppingCart size={25} />
        </button>
        <button onClick={logOut}>
          <FiLogOut size={25} />
        </button>
      </div>
      <div className='relative left-[18rem] bottom-9 inline-block md:hidden cursor-pointer' onClick={() => setIsHamburgerActive(!isHamburgerActive)}>
        <GiHamburgerMenu size={25} />
      </div>
      {isHamburgerActive &&
        <div className='flex flex-col md:hidden'>
          <a className='text-2xl' onClick={() => navigate('/shop')}>Shop</a>
          <a className='text-2xl' onClick={() => navigate('/cart')}>Cart</a>
          <a className='text-2xl' onClick={logOut}>Logout</a>
        </div>}
    </div>

  )
}

export default NavBar
