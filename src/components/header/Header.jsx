import "./Header.css"
import { FaCheck } from "react-icons/fa";


const Header = () => {
  return (
    <div className='header fadeId'>
        <div>
            <h2 className="text-white text-5xl font-semibold pt-48 pl-32 ">START YOUR GAME <br /> WITH THE BEST</h2>
            <p className="text-white text-xl  pt-6 ml-32 ">We've Got Everything <br /> You Need for Gaming Supremacy </p>
            <button className="px-32 py-4 ml-32 mt-6 bg-success text-white font-bold text-xl rounded-xl hover:bg-transparent hover:border hover:border-success hover:text-white transition-all duration-500" >Shop</button>
            <p className="flex items-start text-xl text-white font-bold ml-32 gap-4 mt-6"><FaCheck className="mt-2" /> MORE THAN 15+ POPULAR <br /> PROFESSIONAL <br /> BRANDS</p>
            <p className="flex items-start text-xl text-white font-bold ml-32 gap-4 mt-6"><FaCheck className="mt-2" />2500+ ITEMS</p>
        </div>
    </div>
  )
}

export default Header