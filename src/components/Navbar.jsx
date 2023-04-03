import React, {useState} from 'react'
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Link} from "react-router-dom"
// import CreateFruit from './CreateFruit';
// import FruitsList from './FruitsList';


const Navbar = () => {
    const[nav , setNav]= useState(false)
    const handleClick = () => setNav(!nav)
  return (
         <div className='w-screen h-[80px] z-10 bg-green-300 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold font-signature mr-6 sm:text-6xl'>City Orchard</h1>
                    <ul className='hidden md:flex ml-16 '>
                        <Link to="/" className='p-4'>Home</Link>
                        <Link to="/sell" className='p-4'>Buy</Link>
                        <Link to="/buy" className='p-4'>Sell</Link>
                        <Link to="/about" className='p-4'>About</Link>
                        <Link to="/contacts" className='p-4'>Contacts</Link>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <Link to="/sign-in">
                    <button className='group text-black w-fit px-6 py-3 my-2 mr-4 flex items-center rounded-md bg-gradient-to-r
                     from-cyan-500 to-blue-500 cursor-pointer hover:bg-transparent hover:text-green-500'>Sign-In</button>
                     </Link>
                     <Link to="/sign-up">
                    <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer hover:bg-transparent hover:text-green-900'>Sign-Up</button>
                    </Link>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                </div>
            </div>


            <ul className={!nav ? 'hidden' : 'absolute bg-green-500 w-full px-8'}>
                <Link> className='border-b-2 border-black-300 w-full font-bold'Home</Link>
                <Link> className='border-b-2 border-black-300 w-full font-bold'Sell</Link>
                <Link> className='border-b-2 border-black-300 w-full font-bold'Delivery</Link>
                <Link> className='border-b-2 border-black-300 w-full font-bold'About</Link>
                <Link> className='border-b-2 border-black-300 w-full font-bold'Contacts</Link>
                <div className='flex flex-col my-4'>
                <button className='group text-white w-fit px-6 py-3 my-2 mr-4 flex items-center rounded-md 
                cursor-pointer hover:bg-transparent hover:text-green-700 '>Sign-In</button>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                                    bg-gradient-to-r from-green-300 to-blue-200 shadow-xl cursor-pointer hover:bg-transparent hover:text-green-700'>Sign-Out</button>
                </div>
            </ul>
            
        </div>

  )
}

export default Navbar























// import React from 'react'
// import {Link} from "react-router-dom"
// function Navbar() {
//   return (
    
//     // <div>
//     //     <div>
//     //         <Link to="/sign-up ">Sign-Up</Link>
//     //         <Link to="/sign-in">Sign-In</Link>
//     //         <Link to="/sign-out">Sign-out</Link>

//     //     </div>
//     // </div>
//   )
// }

// export default Navbar