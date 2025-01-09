import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import video1 from "../../assets/background1.mp4";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DATABASE_URL}/api/signup/`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Sign-up successful:", response.data);
      setSuccessMessage("Account created successfully. Redirecting to sign in...");
      setTimeout(() => {
        navigate("/api/signin");
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.error || "Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none" playsInline draggable="false"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen flex items-center justify-center py-12">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        )}
        <div className="w-full max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          {successMessage && (
            <div className="text-gray-400 text-center mb-4">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded bg-gradient-to-r from-gray-900 to-gray-900rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/api/signin")}
              className="text-gray-900 underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
