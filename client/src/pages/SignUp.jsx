import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/users",
});

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (name, email ,password) => {
    try {
      const response = await api.post("/signup", { name, email, password });
      console.log("Sign-up successful:", response.data);
      navigate("/home"); // Redirect to home page after successful sign-up
    } catch (error) {
      console.error("Sign-up error:", error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignUp(userName, email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-black-500 to-blue-500 p-4">
      <form className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Sign Up</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-md text-lg"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-md text-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-md text-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold shadow-lg text-lg"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 mt-6 text-lg">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    try {
      const response = await api.post("/signin", { email, password });
      console.log("Sign-in successful:", response.data);
      navigate("/home"); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error("Sign-in error:", error.response ? error.response.data : error.message);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    await handleSignIn(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-black-500 to-blue-500 p-4">
      <form className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Sign In</h2>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-md text-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-md text-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold shadow-lg text-lg"
          onClick={handleSignInSubmit}
        >
          Sign In
        </button>
        <p className="text-center text-gray-600 mt-6 text-lg">
          Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export { SignUp, SignIn };
