import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import blacklogo from "../../assets/blacklogo.svg";



const Nav = () => {
  return (
      <>
        <div className='absolute '>
            <hr className='bg-gray-500 w-[1500px] mt-24 absolute h-' />
            <div className='flex justify-around items-center mt-8'>
                <div className='ml-32'>
                    <Link to="/"><img src={blacklogo} alt="" /></Link>
                </div>
                <div className='flex gap-9 ml-48 text-black text-xl'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/brands">Brands</NavLink>
                    <NavLink to="/news">What’s new</NavLink>
                    <NavLink to="/seles">Seles</NavLink>
                    <NavLink to="/help">Help</NavLink>
                </div>
                <div className='flex gap-10 text-xl ml-48 text-black'>
                    <NavLink to="/search"><IoSearch /></NavLink>
                    <NavLink to="/search"><FiUser /></NavLink>
                </div>
            </div>
        </div>
      </>
  )
}

export default Nav