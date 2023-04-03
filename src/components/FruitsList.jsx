import React, { useEffect, useState } from "react";
import AddFruit from "./AddFruit";

// import sameImg from '../assets/hero.jpg'


function FruitsList() {
  const [fruits, setFruits] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((r) => r.json())
      .then((fruits) => setFruits(fruits));
  }, []);
  function addFruit(fruit) {
    setFruits([...fruits, fruit]);
  }

  return (
    <div name='fruits' className='w-full'>
        <div className='px-4 py-12'>
            {/* <div className='w-full h-full bg-gray-900/90 absolute'>
               <img className='w-full h-full object-cover mix-blend-overlay' src={sameImg} alt="/" />
            </div> */}
               <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>The City Orchard Top Sellers</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Say goodbye to long supermarket lines and hello to the freshest fruits! Our app lets you buy and sell fruits with ease, right at your fingertips. Whether you're a fruit lover or looking to sell your harvest, our app is the perfect place to connect and enjoy the taste of nature.!</p>
        </div>

    <div className="grid grid-cols-3 gap-4">
      {fruits.map((fruit) => (
        <div className="bg-white rounded-lg shadow-md p-4" key={fruit.id}>
          <img src={fruit.image} alt={fruit.name} className="w-full mb-4" />
          <h2 className="text-lg font-bold mb-2">{fruit.name}</h2>
          <p className="text-gray-700 mb-4">{fruit.availability}</p>
          <h6 className="text-green-500 font-signature text-2xl font-bold mb-2">{fruit.price}</h6>
          <div className="flex items-center">
            <img src={fruit.farmer.image} alt={fruit.farmer.name} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <p className="text-gray-700 font-medium">{fruit.farmer.name}</p>
              <p className="text-gray-600 text-sm">{fruit.farmer.phonenumber}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <AddFruit addFruit={addFruit} />

    </div>
  );
}

export default FruitsList;
