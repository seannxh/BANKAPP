import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../services/authService.js";
import ClipLoader from "react-spinners/ClipLoader"; 
import video1 from "../../assets/background1.mp4";

const Signin = (props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userResponse = await signin(formData);
      console.log("Response from signin:", userResponse);
      props.setToken(userResponse.token);
      setIsLoading(false);
      navigate("/api/user-accounts/");
    } catch (err) {
      setError("Login Failed, Please Try Again");
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
          <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <div className="mb-6">
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
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 roundedbg-gradient-to-r from-gray-900 to-gray-900 rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              disabled={isLoading} 
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Dont have an Account?{" "}
            <button
              onClick={() => navigate("/api/signup")}
              className="text-gray-900 underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;