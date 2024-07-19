import React from 'react';
import logos from "../../assets/logos.svg"
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className='absolute   '>
        <div className='flex justify-around items-center mt-8'>
            <div className='ml-32'>
                <Link to="/"><img src={logos} alt="" /></Link>
            </div>
            <div className='flex gap-9 ml-48 text-white text-xl'>
                <NavLink className=""  to="/">Home</NavLink>
                <NavLink className=""  to="/products">Products</NavLink>
                <NavLink className=""  to="/brands">Brands</NavLink>
                <NavLink className=""  to="/news">What’s new</NavLink>
                <NavLink className=""  to="/seles">Seles</NavLink>
                <NavLink className=""  to="/help">Help</NavLink>
            </div>
            <div className='flex gap-10 text-xl ml-48 text-white'>
                <NavLink to="/search"><IoSearch /></NavLink>
                <NavLink to="/profile"><FiUser /></NavLink>    
            </div>
        </div>
    </div>
  )
}

export default Navbar