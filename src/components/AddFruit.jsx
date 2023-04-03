import React, { useState } from 'react';
import Farmer1 from "../assets/farmers1.jpg"
// import sameImg from '../assets/hero.jpg'


function AddFruit({ addFruit }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    availability: '',
    farmer_id: '',
    client_id: ''
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/fruits", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        addFruit(data);
        setFormData({
          name: '',
          image: '',
          price: '',
          availability: '',
          farmer_id: '',
          client_id: ''
        });
      })
      .catch(error => console.error(error));
  }

  return (
    <div >
        <div className='px-32 py-12 h-92 bg-gray-900/90'>
        {/* <img className='w-full h-full object-cover mix-blend-overlay' src={sameImg} alt="/" /> */}

            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Turn Your Bumper Fruit Harvest into Cash with City Orchard  Sell Now</h2>
            <h3 className='text-5xl text-green-500 font-bold py-6 text-center'>Finding The Right Market</h3>
            <p className='py-4 text-3xl text-slate-300'>

            Are you tired of watching your ripe, delicious fruits go to waste every season? City Orchard is here to help you turn your bumper harvest into cash! Our easy-to-use app connects you with buyers in your local community, allowing you to sell your fresh fruits quickly and easily. Join now and start earning from your backyard orchard!
            </p>
        </div>
            <div>
            <h1 className='text-3xl font-bold text-green-500 text-center'>Fill in the form below to advertise your fruits at City Orchard</h1>

            </div>
    <div class="flex justify-center mt-24">
    <div class="w-1/2 px-8">
      <form onSubmit={handleSubmit} class="bg-white p-8 rounded-lg shadow-lg">
        <label class="block mb-2 text-black font-bold">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <label class="block mb-2 text-black font-bold">Image:</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <label class="block mb-2 text-black font-bold">Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <label class="block mb-2 text-black font-bold">Availability:</label>
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <label class="block mb-2 text-black font-bold">Farmer ID:</label>
        <input type="text" name="farmer_id" value={formData.farmer_id} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <label class="block mb-2 text-black font-bold">Client ID:</label>
        <input type="text" name="client_id" value={formData.client_id} onChange={handleChange} class="border rounded-lg px-3 py-2 mb-4 w-full" />
  
        <button type="submit" class="bg-green text-black font-bold py-2 px-4 rounded">Add Fruit</button>
      </form>
    </div>
    <div class="w-1/2">
      <img src={Farmer1 } alt="your " class="w-full h-screen object-cover" />
    </div>
  </div>
  
  </div>
  


  );
}

export default AddFruit;
