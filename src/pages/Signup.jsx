
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {AuthContext} from './AuthContext'


function SignUp() {

  const {register} = useContext(AuthContext)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  


  const handleSubmit = (e) => {
    e.preventDefault()
    register(name, email, password )
  }


  return (
    <div className=""style={{backgroundImage: `url('./bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
     <div className='text-center'>
            <span className=" text-white font-bold  text-2xl flex-shrink-0">
              <FontAwesomeIcon icon={faPlaneDeparture}  />
              <span className="ml-4">EPIC TOURS</span>
              </span>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center">
  <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md p-8 bg-white border-2 border-gray-400 rounded-lg">
    <h1 className="border-b-2 border-green-500 text-3xl font-bold pb-3">Fill In All Fields To Sign Up</h1>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
      <input 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        placeholder="Enter your name"
      />
      </div>
      <div className="mb-4">
      <label htmlFor="image-url" className="block mb-2 font-bold text-gray-700">Image Url</label>
      <input 
        id="image-url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        placeholder="Enter your image-url here"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
      <input 
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="email"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="phonenumber" className="block mb-2 font-bold text-gray-700">Phonenumber</label>
      <input 
        id="phone"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="tel"
        placeholder="Enter your phonenumber"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
      <input 
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="password"
        placeholder="Enter your password"
      />
      </div>
      <div className="mb-6">
      <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Confirm Password</label>
      <input 
        id="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="password"
        placeholder="Confirm your password"
      />
    </div>
    <button
      className="px-4 py-2 mx-auto font-bold text-white bg-green-900 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      type="submit"
    >
      Sign Up
    </button>
  </form>
</div>

  </div>
 
  );
}

export default SignUp;
















// import React, { useState } from "react";

// export default function Signin() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     image_url: "",
//     phone_number: ""
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
//         <div>
//           <a href="/">
//             <h3 className="text-4xl pt-12 mt-6 font-bold text-green-600">Create an account</h3>
//           </a>
//         </div>
//         <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-black">
//                 Name
//               </label>
//               <div className="flex flex-col items-start">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="email" className="block text-sm font-medium text-black">
//                 Email
//               </label>
//               <div className="flex flex-col items-start">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="password" className="block text-sm font-medium text-black">
//                 Password
//               </label>
//               <div className="flex flex-col items-start">
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="password_confirmation" className="block text-sm font-medium text-black">
//                 Confirm Password
//               </label>
//               <div className="flex flex-col items-start">
//                 <input
//                   type="password"
//                   name="password_confirmation"
//                   value={formData.password_confirmation}
//                   onChange={handleChange}
//                   className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//                 </div>
//                 </div>
//                 <div className="mt-4">
//   <label htmlFor="image_url" className="block text-sm font-medium text-black">
//     Profile Image URL
//   </label>
//   <div className="flex flex-col items-start">
//     <input
//       type="text"
//       name="image_url"
//       value={formData.image_url}
//       onChange={handleChange}
//       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//     />
//   </div>
// </div>
// <div className="mt-4">
//   <label htmlFor="phone_number" className="block text-sm font-medium text-black">
//     Phone Number
//   </label>
//   <div className="flex flex-col items-start">
//     <input
//       type="text"
//       name="phone_number"
//       value={formData.phone_number}
//       onChange={handleChange}
//       className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//     />
//   </div>
// </div>
// <div className="mt-4">
//           <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
//             Sign in
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//   );
// }
                  
