import React, { useState } from 'react';
import Login from './Login';

function Loggedin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  function handleLogin(user) {
    if (user.id) {
      setLoggedIn(true);
      setUser(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    setUser({});
  }

  return (
    <div>
      {loggedIn ? (
        <div className='bg-green-300'>
          <h1 className='w-full mt-64 text-green-900 font-bold font-signature'>Welcome, {user.name}!</h1>
          <button className='text-white bg-green-500' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1 className='font-bold text-green-700 font-signature'>Login Form</h1>
          <Login onLogin={handleLogin} />
          {error && <div>{error}</div>}
        </div>
      )}
    </div>
  );
}

export default Loggedin;
