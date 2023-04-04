// import React, {useState} from 'react'
// // import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


// import {MenuIcon, XIcon} from '@heroicons/react/outline'
// import {Link} from "react-router-dom"
// // import CreateFruit from './CreateFruit';
// // import FruitsList from './FruitsList';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../pages/AuthContext";


const Navbar = () => {
    const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  const triggerLogout = () => {
    logout();
  };

    // const[nav , setNav]= useState(false)
    // const handleClick = () => setNav(!nav)
  return (
    <div className="bg-gradient-to-r from-blue-200 via-green-400 to-green-800 flex h-12 px-6 py-2 justify-around" >
    <div className="text-left">
      <span className="font-bold text-black  text-xl flex-shrink-0">
        <FontAwesomeIcon icon={faPlaneDeparture} />
        <span className="ml-4">City Orchard</span>
      </span>
    </div>
    <div className="pl-20 justify-evenly underline-offset-0
">
      <div className=" flex text-center  mx-9">
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-sm  font-bold text-black hover:bg-green-500 hover:text-white"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-green-500 hover:text-white"
        >
          ABOUT
        </Link>

        {}

        {isLoggedIn ? (
            <>
             <Link
                to="/buy"
                className="ml-4 px-3 py-2 rounded-md text-xs font-bold text-black hover:bg-green-5300 hover:text-white"
              >
                Buy
              </Link>
             <Link
                to="/sell"
                className="ml-4 px-3 py-2 rounded-md text-xs font-bold text-black hover:bg-green-300 hover:text-white"
              >
                Sell
              </Link>
              {/* <Link to="/">Home</Link> */}

              
              <Link onClick={triggerLogout}>
                <button className="ml-4 px-10 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white">Logout</button>
              </Link>
             
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="ml-4 px-10 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                Sign-In
              </Link>
              <Link
                to="/sign-up"
                className="ml-4 px-3 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                SIGN-UP
              </Link>
            </>
          )}
      </div>
    </div>
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