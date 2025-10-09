import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    console.log('Form submitted Successfully:', { username, email, password });


    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={username}          
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}               
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}           
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
