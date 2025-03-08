import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData, {
        withCredentials: true, // Ensures JWT cookie is stored
      });

      setMessage("Signup successful! Please log in.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        {message && (
          <p className="text-green-600 text-center mb-4">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
                <input
                    type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              onChange={handleChange}
              required
                />
                <input
                    type="email"
              name="email"
                    placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              onChange={handleChange}
              required
                />
                <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              onChange={handleChange}
              required
            />
            <select
              name="role"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-green-200"
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="businessman">Businessman</option>
              <option value="expert">Expert</option>
            </select>
                <input
                    type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              onChange={handleChange}
              required
            />
                </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
                </button>
            </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Log in
                    </a>
                </p>
            </div>
        </div>
  );
};

export default Signup;
