import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:my-6'>Growing with data.</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
            Fast, Flexible financing for{' '}
            <span className='text-[#00df9a]'>
              <Typewriter words={['Startups', 'Businesses', 'Enterprises']} loop cursor />
            </span>
          </p>
        </div>
        <p className='md:text2xl text-xl font-bold text-gray-500'> Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms. </p>
      <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '> Get started</button>
      </div>
    </div>
  );
};

export default Hero;