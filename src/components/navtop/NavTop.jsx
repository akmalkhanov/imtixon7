import logo from "../../assets/GG.svg"
import flag from "../../assets/flag.svg"
import { MdPhoneCallback } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const NavTop = () => {
  return (
    <div className="">
        <nav className='bg-black flex justify-around h-20 '>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" />
                <MdPhoneCallback className='text-white' />
                <p className='text-white'>+4904-049-950</p>
            </div>
            <div className='flex items-center gap-10'>
                <p className='text-white'>Get 50% Off on the Selected items </p>
                <p className='text-secondary p-2'>|</p>
                <button className='text-white hover:text-secondary transition-all duration-500'>Shop now</button>
            </div>
            <div className='flex items-center gap-9'>
                <button className="flex items-center gap-2">
                    <img src={flag} alt="" />
                    <p className='text-white'>English</p>
                </button>
                <button className='flex items-center gap-2'>
                    <GrLanguage className='text-white' />
                    <span className='text-white'>Location</span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default NavTop