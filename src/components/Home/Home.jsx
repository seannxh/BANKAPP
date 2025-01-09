import React from 'react';
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import ContactUs from "./contactform";
import security from "../../assets/security.png"
import background1 from "../../assets/background1.mp4";
import team from "../../assets/team.mp4";
import black from "../../assets/black.mp4";
import logo from "../../assets/logo1.jpg";
import about from "../../assets/aboutbackground.mp4";
import moon from "../../assets/moon.mp4";
import ButtonHome from './buttonhome.jsx';
import { Layout } from './layout.jsx';

const HomeContent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartForFree = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/api/signup");
      setLoading(false);
    }, 1500);
  };

  const handleViewAccount = () => {
    navigate("/api/user-accounts/"); // Replace with the actual account view route
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{ marginTop: '80px' }}
      >
        <source src={background1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="min-h-[100vh] container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo Section */}
          <Link to="/home" className="block">
            <img src={logo} alt="Logo" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
          </Link>

          {/* Hero Section */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="animate-fade-in-down">
              <h1 className="text-4xl md:text-5xl text-black font-varela-round">
                Financial Stone Inc.
              </h1>
            </div>
            <p className="text-sm">Trust in US, Banking at Finest.</p>
            <p className="text-base md:text-lg text-black">
              Take control of your finances and achieve your goals with ease using
              our secure and user-friendly banking tools. Start today and turn your
              financial dreams into reality!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonHome 
              loading={loading} 
              handleStartForFree={handleStartForFree} 
              handleViewAccount={handleViewAccount} 
            />

            <Link
              to="landing2"
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="bg-gradient-to-r from-gray-900 to-gray-900 py-3 px-6 rounded-md text-white cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
            >
              Why Us?
            </Link>
          </div>
        </div>
      </div>

      <div className="my-20">
        <video autoPlay loop muted className="w-full h-40 object-cover">
          <source src={moon} type="video/mp4" />
        </video>
      </div>

      <section id="landing2" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-lg text-gray-900">
              We are a team of strong believers in making banking easily accessible with no cost.
              <br />Your money is just as important to us as it is to you.
              <br />We are here to help and change the world.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg border-2 border-gray-900 shadow-md p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="rounded-lg border-2 border-gray-900 shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <video autoPlay loop muted className="w-full h-full object-cover">
                  <source src={team} type="video/mp4" />
                </video>
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-5 text-center">About Us</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                At Financial Stone Inc., we are dedicated to revolutionizing the banking experience by providing secure, user-friendly, and innovative financial solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-gray-900 shadow-md p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="rounded-lg border-2 border-gray-900 shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <img src={security} alt="Description of the image" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-5 text-center">Security</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                At Financial Stone Inc., we understand that security threats can arise every day, and we are dedicated to fighting against them with our robust safety measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <video
        autoPlay
        loop
        muted
        className="w-full h-40 object-cover my-40"
      >
        <source src={about} type="video/mp4" />
      </video>

      <section id="benefits" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Benefits</h2>
            <p className="text-base md:text-lg">
              These are just a few of the exclusive benefits available to you at Financial Stone Inc.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
        </div>
      </section>
      
      <video
        autoPlay
        loop
        muted
        className="w-full h-40 object-cover my-40"
      >
        <source src={black} type="video/mp4" />
      </video>
      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};

export default Home;