import React from 'react'
import {HeartIcon,UserIcon,ShoppingCartIcon} from "@heroicons/react/outline"
const Header = () => {
  return (
    <div className='flex items-center justify-between px-32 py-5 border-b-2 border-black'>
        <p className='text-xl cursor-pointer'>momentup.</p>
        
        <ul className='flex space-x-5 '>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Lookbook</a></li>
        </ul>

        <div className='flex space-x-2'>
            <HeartIcon className='w-6 h-6 cursor-pointer '/>
            <UserIcon className='w-6 h-6 cursor-pointer' />
            <ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header