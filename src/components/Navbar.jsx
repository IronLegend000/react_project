import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav); // This will toggle the state between true and false
      };
      

  return (
    <div className='flex justify-between items-ceter h-24  max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>home</li>
            <li className='p-4'>company</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>    
             
             <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>home</li>
                <li className='p-4 border-b border-gray-600'>company</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4'>About</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar