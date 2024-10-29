import React from 'react'
import Typed  from "react-typed";

export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px} w--full h-screen mx-auto text-center flex flex-col justify-center' >
          <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-xl text-4xl font-bold md:mpy-6 '>Growing with data.</h1>
          <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, Flexible financing for </p>
            <Typed strings={['BTB','BTC', 'SASS']} 
            typedSpeed={120} 
            backSpeed={140}
            loop />          
          </div>
        </div>
    </div>
  );
};

export default Hero;