import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from "../../assets/footerlogo.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import logos from "../../assets/GG.svg"

const Footer = () => {
  return (
    <div className='container bg-danger h-[600px] border-t-2 border-white '>
        <div className='flex '>
            <div>
                <Link to="/"><img className='pl-32 pt-16' src={footerlogo} alt="" /></Link>
                <p className='pl-32 pt-4 font-semibold text-white'>START YOUR GAME <br /> WITH THE BEST</p>
                <div className='flex gap-5 ml-32 mt-24'>
                <Link to="/"><img className=' pt-16' src={twitter} alt="" /></Link>
                <Link to="/"><img className=' pt-16' src={linkedin} alt="" /></Link>
                <Link to="/"><img className=' pt-16' src={facebook} alt="" /></Link>
                <Link to="/"><img className=' pt-16' src={instagram} alt="" /></Link>
                </div>
            </div>
            <div className='ml-80'>
              <h2 className='text-white text-2xl font-bold pt-12'>Services</h2>
              <Link to="/"><p className='text-white pt-4'>Gift Card</p></Link>
              <Link to="/"><p className='text-white pt-4'>Mobile App</p></Link>
              <Link to="/"><p className='text-white pt-4'>Shipping & Delivery</p></Link>
              <Link to="/"><p className='text-white pt-4'>Order Pickup</p></Link>
              <Link to="/"><p className='text-white pt-4'>Account Signup</p></Link>
            </div>
            <div className='ml-32'>
              <h2 className='text-white text-2xl font-bold pt-12'>Help</h2>
              <Link to="/"><p className='text-white pt-4'>ShopCart Help</p></Link>
              <Link to="/"><p className='text-white pt-4'>Returns</p></Link>
              <Link to="/"><p className='text-white pt-4'>Track Orders</p></Link>
              <Link to="/"><p className='text-white pt-4'>Contact Us</p></Link>
              <Link to="/"><p className='text-white pt-4'>Feedback</p></Link>
              <Link to="/"><p className='text-white pt-4'>Security & Fraud</p></Link>
            </div>
            <div className='ml-32'>
              <h2 className='text-white text-2xl font-bold pt-12'>About Us</h2>
              <Link to="/"><p className='text-white pt-4'>News & Blog</p></Link>
              <Link to="/"><p className='text-white pt-4'>Help</p></Link>
              <Link to="/"><p className='text-white pt-4'>Press Center</p></Link>
            </div>
        </div>
        <hr className='mt-24' />
        <div className='flex items-center justify-around'>
          <img className='mt-6' src={logos} alt="" />
          <Link to="/"><p className='text-white pt-4 text-xl font-bold'>Help Center</p></Link>
          <Link to="/"><p className='text-white pt-4 text-xl font-bold'>Privacy & Policy</p></Link>
          <Link to="/"><p className='text-white pt-4 text-xl font-bold'>Terms of Service</p></Link>
          <Link to="/"><p className='text-white pt-4 text-xl font-bold'>All rights reserved by GameGeek | 2023</p></Link>
        </div>
    </div>
  )
}

export default Footer