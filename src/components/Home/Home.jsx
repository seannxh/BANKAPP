// Layout.jsx
import React from 'react';


export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 pt-[175px]"> 
        {children}
      </main>
    </div>
  );
};



// Home.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import ContactUs from "./contactform";
import security from "../../assets/security.png"
import video1 from "../../assets/background1.mp4";
import video2 from "../../assets/landing1.mp4";
import video3 from "../../assets/team.mp4";
import video4 from "../../assets/black.mp4";
import ButtonHome from './buttonhome.jsx';
import logo from "../../assets/logo1.jpg";
import saving from "../../assets/saving.png";
import home from "../../assets/home.png";
import auto from "../../assets/auto2.jpg";
import video5 from "../../assets/aboutbackground.mp4";
import video6 from "../../assets/moon.mp4";
import "./home.css"

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
    navigate("/api/user-accounts/"); 
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{ marginTop: '80px' }} 
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="min-h-[100vh] container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">

          <Link to="/" className="block">
            <img src={logo} alt="Logo" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
          </Link>

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
          <source src={video6} type="video/mp4" />
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
            <div className="bg-white rounded-lg border-2 border-gray-900 shadow-md p-6  hover:scale-[1.02] transition-transform duration-300">
            <div className="rounded-lg border-2 border-gray-900 shadow-md overflow-hidden  hover:scale-[1.02] transition-transform duration-300">
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={video3} type="video/mp4" />
              </video>
            </div>
              <h3 className="text-xl font-semibold mb-4 pt-5 text-center">About Us</h3>
              <p className="text-gray-800 text-sm leading-relaxed ">
              At Financial Stone Inc., we are dedicated to revolutionizing the banking experience by providing secure, user-friendly, and innovative financial solutions. Our mission is to empower individuals and businesses to take control of their financial futures with confidence and ease. We strive to build lasting relationships by offering personalized services and tools designed to help you achieve your goals. Whether it’s saving for the future, growing your business, or managing daily finances, we’re here every step of the way, committed to making finance better, simpler, and more accessible for everyone.
              </p>
            </div>
            <div className="bg-white rounded-lg border-2 border-gray-900 shadow-md p-6  hover:scale-[1.02] transition-transform duration-300">
            <div className="rounded-lg border-2 border-gray-900 shadow-md overflow-hidden  hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={security} 
              alt="Description of the image" 
              className="w-full h-full object-cover" 
            />
            </div>
              <h3 className="text-xl font-semibold mb-4 pt-5 text-center">Security</h3>
              <p className="text-gray-800 text-sm leading-relaxed ">
                At Financial Stone Inc., we understand that security threats can arise every day, and we are dedicated to fighting against them with our robust safety measures. From advanced encryption and multi-factor authentication to real-time fraud monitoring, we work tirelessly to protect your personal and financial information. Our systems are designed to detect and block suspicious activity 24/7, ensuring your data stays secure. We continually update our security protocols to stay ahead of emerging threats, and our team of experts is always ready to address any concerns. With Financial Stone Inc., you can have peace of mind knowing we’re here every step of the way, safeguarding your financial journey.
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
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <section id="benefits" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Benefits</h2>
            <p className="text-base md:text-lg">
              These are just a few of the exclusive benefits available to you at Financial Stone Inc.
              From competitive rates to personalized financial solutions, we're dedicated to meeting
              your unique needs. But that's not all—explore even more perks and services designed to
              help you achieve your financial goals with ease and confidence. Join us today and unlock
              the full potential of your banking experience!
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <img src={home} alt="Mortgages" className="w-16 h-16 rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mortgages</h3>
              <p className="text-sm text-gray-600 flex-grow">
                See if You Prequalify for Our Low First-Time Homebuyer APR as Low as 4.25%!
              </p>
              <a
                href="/api/signup"
                className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md text-center inline-block"
              >
                Join Now!
              </a>
            </div>

            <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <img src={saving} alt="Savings" className="w-25 h-16 rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Savings</h3>
              <p className="text-sm text-gray-600 flex-grow">
                Financial Stone Inc. is Now Offering Up to a 10.55% Annual Yield on Your Savings!
              </p>
              <a
                href="/api/signup"
                className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md text-center inline-block"
              >
                Join Now!
              </a>
            </div>

            <div className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <img src={auto} alt="Auto Loans" className="w-16 h-16 rounded-xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Auto Loans</h3>
              <p className="text-sm text-gray-600 flex-grow">
                Get as Low as 3.9% on New Cars and as Low as 4.45% on Selected and Qualified Auto
                Vehicles.
              </p>
              <a
                href="/api/signup"
                className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md text-center inline-block"
              >
                Join Now!
              </a>
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
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
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