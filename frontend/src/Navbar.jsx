import React from 'react'
import download from '../assets/download.png'
// import { useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-4 py-1 lg:mx-40 line-bottom'>
            <Link to="/"><img className='w-20 h-25 scale-150 ' src={download} alt="Logo" /></Link>
            <Link to="/about"><button className="-mx-1 bg-white text-black backdrop-blur-md hover:bg-[#1b1c1d] hover:text-white font-normal py-2 px-3 border border-white/30 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                About Us
            </button></Link>
            
        </div>
    )
}

export default Navbar