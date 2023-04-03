import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
  <label className="text-green-500 mb-2">
    Name:
    <input type="text" name="name" value={formData.name} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <label className="text-green-500 mb-2">
    Image:
    <input type="text" name="image" value={formData.image} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <label className="text-green-500 mb-2">
    Price:
    <input type="text" name="price" value={formData.price} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <label className="text-green-500 mb-2">
    Availability:
    <input type="text" name="availability" value={formData.availability} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <label className="text-green-500 mb-2">
    Farmer ID:
    <input type="text" name="farmer_id" value={formData.farmer_id} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <label className="text-green-500 mb-2">
    Client ID:
    <input type="text" name="client_id" value={formData.client_id} onChange={handleChange} className="rounded border-gray-400 border-2 py-1 px-3 ml-2" />
  </label>
  <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4">
    Add Fruit
  </button>
</form>

  );
}

export default AddFruit;
