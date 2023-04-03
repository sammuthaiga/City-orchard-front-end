import React from 'react'
import bgImg from '../assets/landing.jpg'
const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'> 
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='border-b-2 border-white-300 text-3xl text-white '>Unique Taste. Top Quality. Fast Delivery</p>
            <h1 className='py-3 text-6xl md:text-7xl font-bold  text-white'>Instant Fresh Fruit Delivery</h1>
            <p className='text-3xl text-white'><span className='text-green-500 font-signature text-5xl'>City Orchard</span>. Freshly picked, just a click away!</p>
            
        </div>
        <div>
            <img className='w-full h-full rounded-xl' src={bgImg} alt='/' />
        </div>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-autoflex flex-col justify-center md:items-start w-full '>
        <button className='bg-gradient-to-r from-green-300 to-blue-200 shadow-xl w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy</button> 
            <button className='bg-gradient-to-r from-green-300 to-blue-200 shadow-xl w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Sell</button> 
        </div>

    </div>


    </div>
  )
}

export default Hero