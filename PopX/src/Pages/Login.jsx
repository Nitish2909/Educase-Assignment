import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user data from localStorage
    const savedUser = localStorage.getItem("signupData");
    if (!savedUser) {
      setError("No user found. Please sign up first.");
      return;
    }
    const user = JSON.parse(savedUser);
    // Check email and password
    if (user.email === email && user.password === password) {
      setError("");

      // saved logged-in user
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/account"); // Navigate to Account page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400">
      <div className="min-h-screen bg-white shadow-md rounded-lg max-w-sm">
        <div className="max-w-[70%] mt-8 ml-4 ">
          <h1 className="text-2xl font-bold ">Signin to your PopX account</h1>
           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 px-4">
          <label className="mb-1 font-semibold text-violet-600">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder=" Enter email address"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          <label className="mb-1 font-semibold text-violet-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" Enter password"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          <button
        type="submit"
          className="bg-violet-700 text-white py-3 rounded-md text-center mb-3 w-full mt-4 text-xl"
        >
          Login
        </button>
        </form>
        
      </div>
    </div>
  );
  
};

export default Login;
