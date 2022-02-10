import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPinterestSquare } from 'react-icons/fa'
import { GiShoppingCart} from 'react-icons/gi'

const NavBar = () => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
  }

  return (

    <div className=' hidden md:pt-16 md:px-48 md:flex justify-between align-middle'>
      <div>
        <button className='relative right-5'>
          <AiFillInstagram size={20} />
        </button>
        <button>
          <FaPinterestSquare size={20} />
        </button>
      </div>
      <div>
        <a  href='/shop' className=' font-formal font-light cursor-pointer text-4xl relative bottom-8'>Anise</a>
      </div>
      <div>
        <button className='relative right-5' onClick={() => navigate('/cart')} > 
          < GiShoppingCart size={25} />
        </button>
        <button onClick={logOut}>
          <FiLogOut size={25} />
        </button>
      </div>
    </div>

  )
}

export default NavBar
