import React, { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    image_url: "",
    phone_number: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <a href="/">
            <h3 className="text-4xl pt-12 mt-6 font-bold text-green-600">Create an account</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
                </div>
                <div className="mt-4">
  <label htmlFor="image_url" className="block text-sm font-medium text-black">
    Profile Image URL
  </label>
  <div className="flex flex-col items-start">
    <input
      type="text"
      name="image_url"
      value={formData.image_url}
      onChange={handleChange}
      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
</div>
<div className="mt-4">
  <label htmlFor="phone_number" className="block text-sm font-medium text-black">
    Phone Number
  </label>
  <div className="flex flex-col items-start">
    <input
      type="text"
      name="phone_number"
      value={formData.phone_number}
      onChange={handleChange}
      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
</div>
<div className="mt-4">
          <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
                  
