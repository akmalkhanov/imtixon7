import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import photo3 from "../../assets/photo3.png"
import photo4 from "../../assets/photo4.png"
import photo5 from "../../assets/photo5.png"
import photo6 from "../../assets/photo6.png"
import photo7 from "../../assets/photo7.png"
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />

        <section className='bg-danger h-[1400px]'>
          <h2 className='text-4xl font-semibold text-white text-center pt-12'>Discover news and innovations</h2>
          <ul className='flex justify-center gap-20 mt-12'>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo1} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>Always in the Game</h4>
              <p className='text-white'>Stay ahead of the latest and <br /> greatest gaming tech, featuring <br /> new releases, exclusive deals, and <br /> exciting pre-orders.</p>
              <button className='text-white my-6 border-b-2 hover:text-secondary hover:border-b-secondary'>See More</button>
            </li>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo2} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>Enhance Your Experience</h4>
              <p className='text-white'>Stay ahead of the latest and <br /> greatest gaming tech, featuring <br /> new releases, exclusive deals, and <br /> exciting pre-orders.</p>
              <button className='text-white my-6 border-b-2 hover:text-secondary hover:border-b-secondary'>See More</button>
            </li>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo3} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>Command the Battle!</h4>
              <p className='text-white'>Stay ahead of the latest and <br /> greatest gaming tech, featuring <br /> new releases, exclusive deals, and <br /> exciting pre-orders.</p>
              <button className='text-white my-6 border-b-2 hover:text-secondary hover:border-b-secondary'>See More</button>
            </li>
          </ul>

          <div className='flex gap-16 pl-48 pt-24 text-2xl font-semibold text-white border-b pb-4'>
            <h4>TRENDING</h4>
            <h4>NEW</h4>
            <h4>POPULAR</h4>
          </div>
          <ul className='flex justify-center gap-16 mt-16'>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo4} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>LOGITECH gaming <br /> headset</h4>
              <p className='text-white'>699,99 €</p>
            </li>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo5} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>CHAIR gaming <br /> MGCPROFBL GAMING</h4>
              <p className='text-white'>149,90 €</p>
            </li>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo6} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>Mando Microsoft <br /> Xbox Controller</h4>
              <p className='text-white'>54,99 €</p>
            </li>
            <li>
              <img className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer' src={photo7} alt="" />
              <h4 className='text-white text-2xl font-bold py-6 cursor-pointer'>PC Gaming <br /> NEOMEDI05 NEOPC</h4>
              <p className='text-white'>699,99 €</p>
            </li>
          </ul>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default Home