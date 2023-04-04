


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {AuthContext} from './AuthContext'
import { Link } from "react-router-dom";



function LogIn() {

     const {login} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }




  return (
    <div className="" style={{backgroundImage: `url('./bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* <h1 className="text-center pt-5 text-2xl font-bold text-black">Epic Tours</h1> */}
      <div className='text-center'>
        <Link to="/">
            <span className=" text-white font-bold  text-2xl flex-shrink-0">
              <FontAwesomeIcon icon={faPlaneDeparture}  />
              <span className="ml-4">City Orchard</span>
              </span>
        </Link>
      </div>
      

      <div className="flex flex-col min-h-screen items-center">
        
  <form
    onSubmit={handleSubmit}
    className="w-96 pt-10 px-4 py-5 bg-white border-2 border-blue-900 mt-20 rounded-lg shadow-md">
    <h1 className="border-b-2 border-green-500 text-3xl font-bold pb-3">Fill In All Fields To Login</h1>
    <div className="flex flex-col mb-4">
      <label className="py-2 font-bold" htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 rounded-md border-gray-300 py-2 px-3"
        type="email"
        id="email"
        name="email"
        required
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="py-2 font-bold" htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 rounded-md border-gray-300 py-2 px-3"
        type="password"
        id="password"
        name="password"
        required
      />
    </div>
    <button
      className="bg-green-900 hover:bg-purple-500 text-white my-5 p-2 rounded-md mx-auto w-full"
      type="submit"
    >
      Login
    </button>
  </form>
</div>

    </div>
  );
}

export default LogIn;
// import React, { useState} from 'react'

// import Disp10 from '../assets/disp10.jpg'

// function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((r) => r.json())
//       .then((user) => {
//         if (user.id) {
//           onLogin(user);
//           setError("");
//         } else {
//           setError("Invalid username or password");
//         }
//       })
//       .catch((error) => {
//         setError("Network error, please try again");
//       });
//   }

//   return (
//     <div name='login' className='w-full'>
//     <div class="bg-cover bg-center h-screen " >

//   <form onSubmit={handleSubmit} class="mt-32 mx-auto max-w-md bg-white p-4">
//     <div class="flex flex-col gap-2">
//       <label class="bg-green-500 p-2" for="username">Username:</label>
//       <input
//         type="text"
//         id="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         class="p-2 border border-gray-400 rounded-md"
//       />
//     </div>
//     <div class="flex flex-col gap-2 mt-4">
//       <label class="bg-green-500 p-2" for="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         class="p-2 border border-gray-400 rounded-md"
//       />
//     </div>
//     <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//       Login
//     </button>
//     {error && <div>{error}</div>}
//   </form>
// </div>
// </div>

//   );
// }

// export default Login
