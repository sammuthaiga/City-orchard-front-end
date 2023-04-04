import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FruitsList() {
  const [fruits, setFruits] = useState([]);
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((r) => r.json())
      .then((fruits) => setFruits(fruits));
  }, []);

  const handleAddToCart = (fruitId) => {
    // Check if cart exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Check if selected fruit already exists in cart
    if (cart[fruitId]) {
      // If selected fruit exists in cart, increment its quantity by 1
      cart[fruitId].quantity++;
    } else {
      // If selected fruit does not exist in cart, add it with a quantity of 1
      cart[fruitId] = {
        id: fruitId,
        name: fruits.find((fruit) => fruit.id === fruitId).name,
        price: fruits.find((fruit) => fruit.id === fruitId).price,
        quantity: 1,
      };
    }

    // Update cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`You have added ${fruits.find((fruit) => fruit.id === fruitId).name} to your cart`);
  };

  return (
    <div>
  {isLoggedIn ? (
    <div name="fruits" className="w-full">
      <div className="px-4 py-12">
        <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">The City Orchard Top Sellers</h2>
        <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
        <p className="py-4 text-3xl text-slate-300">
          Say goodbye to long supermarket lines and hello to the freshest fruits! Our app lets you buy and sell fruits
          with ease, right at your fingertips. Whether you're a fruit lover or looking to sell your harvest, our app is
          the perfect place to connect and enjoy the taste of nature.!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {fruits.length > 0 &&
          fruits.map((fruit) => (
            <div className="bg-white rounded-lg shadow-md p-4 relative" key={fruit.id}>
              {fruit && fruit.image && <img src={fruit.image} alt={fruit.name} />}

              <h2 className="text-lg font-bold mb-2">{fruit.name}</h2>
              <p className="text-gray-700 mb-4">{fruit.availability}</p>
              <h6 className="text-green-500 font-signature text-2xl font-bold mb-2">{fruit.price}</h6>
              <div className="flex items-center">
                {fruit.farmer && fruit.farmer.image && (
                  <img src={fruit.farmer.image} alt={fruit.farmer.name} className="w-8 h-8 rounded-full mr-2" />
                )}
                <div>
                  {fruit.farmer && fruit.farmer.name && (
                    <p className="text-gray-700 font-medium">{fruit.farmer.name}</p>
                  )}
                  {fruit.farmer && fruit.farmer.name && (
                    <p className="text-gray-600 text-sm">{fruit.farmer.phonenumber}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <button className="absolute bottom-0 right-0 bg-green-300 text-black align-middle px-4 py-2" onClick={() => handleAddToCart(fruit.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <p className="text-center text-red-700 font-bold">
          Authentication into our City Orchard app is necessary to access and purchase our freshly harvested fruits. Join us
          today and taste the goodness of nature.
        </p>
        <div className="flex justify-between w-full mt-4">
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
              Go to Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px- px-4 rounded-full">Go to Sign-Up</button>
      </Link>
    </div>
  </div>
</div>


      )}
    </div>
  );
  
}

export default FruitsList;
