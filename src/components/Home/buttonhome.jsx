import React, { useState, useEffect } from 'react';

const ButtonHome = ({ loading, handleStartForFree, handleViewAccount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    setIsLoggedIn(!!token);
  }, []);

  return (
    <button
      onClick={isLoggedIn ? handleViewAccount : handleStartForFree}
      disabled={loading}
      className="bg-gradient-to-r from-gray-900 to-gray-900 py-3 px-6 rounded-md text-white cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
    >
      {loading ? "Loading..." : isLoggedIn ? "View Account" : "Start for free"}
    </button>
  );
};

export default ButtonHome;
