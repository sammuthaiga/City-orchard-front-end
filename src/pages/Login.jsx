
import React, { useState} from 'react'

import Disp10 from '../assets/disp10.jpg'

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.id) {
          onLogin(user);
          setError("");
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((error) => {
        setError("Network error, please try again");
      });
  }

  return (
    <div name='login' className='w-full'>
    <div class="bg-cover bg-center h-screen " >

  <form onSubmit={handleSubmit} class="mt-32 mx-auto max-w-md bg-white p-4">
    <div class="flex flex-col gap-2">
      <label class="bg-green-500 p-2" for="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        class="p-2 border border-gray-400 rounded-md"
      />
    </div>
    <div class="flex flex-col gap-2 mt-4">
      <label class="bg-green-500 p-2" for="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        class="p-2 border border-gray-400 rounded-md"
      />
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Login
    </button>
    {error && <div>{error}</div>}
  </form>
</div>
</div>

  );
}

export default Login
