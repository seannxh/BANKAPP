import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import logo from "../../assets/logo1.jpg";
import { signout } from "../../services/authService.js";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signout(); 
      props.setToken(null); 
      navigate("/"); 
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        setSidebar(false); 
      },
    },
    {
      title: props.token ? 'Account' : null,
      path: props.token ? '/api/user-accounts/' : null,
      icon: props.token ? <FaIcons.FaUser /> : null,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? 'Transfer' : null,
      path: props.token ? '/api/send-money/' : null,
      icon: props.token ? <FaIcons.FaMoneyBillAlt /> : null,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? 'Deposit' : null,
      path: props.token ? '/api/deposit-money/' : null,
      icon: props.token ? <FaIcons.FaPiggyBank /> : null,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? 'Create Account' : null,
      path: props.token ? '/api/create-bank-account/' : null,
      icon: props.token ? <FaIcons.FaLightbulb /> : null,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? 'Withdraw' : null,
      path: props.token ? '/api/withdraw-money/' : null,
      icon: props.token ? <FaIcons.FaHandHoldingUsd /> : null,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? null : 'Sign In',
      path: props.token ? '#' : '/api/signin',
      icon: props.token ? null : <AiIcons.AiOutlineLogin />,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
    {
      title: props.token ? 'Sign Out' : 'Sign Up',
      path: props.token ? '#' : '/api/signup',
      icon: props.token ? <AiIcons.AiOutlineLogout /> : <FaIcons.FaUserPlus />,
      cName: 'nav-text',
      action: props.token
        ? () => {
            handleSignOut();
            setSidebar(false);
          }
        : () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSidebar(false);
          },
    },
    {
      title: 'Support',
      path: '/contactus',
      icon: <FaIcons.FaLifeRing />,
      cName: 'nav-text',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSidebar(false);
      },
    },
  ];

  
  const filteredSidebarData = SidebarData.filter((item) => item.title !== null);

  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <div
        className="h-20 flex items-center justify-between px-8 bg-white opacity-80 shadow-md fixed top-0 left-0 w-full"
        style={{ zIndex: 60 }}
      >
        <button className="text-2xl" onClick={showSidebar}>
          <FaIcons.FaBars />
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {loading && (
          <div className="absolute right-8">
            <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-gray-800 rounded-full"></div>
          </div>
        )}
      </div>

      <nav
        className={`bg-white opacity-90 w-64 h-screen fixed top-0 left-0 transform ${
          sidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 shadow-lg`}
        style={{ zIndex: 60 }}
      >
        <ul className="w-full">
          <li className="w-full h-20 flex items-center px-8">
            <button className="text-2xl text-black" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </button>
          </li>

          {filteredSidebarData.map((item, index) => (
            <li
              key={index}
              className="pl-5 flex items-center p-2 text-black hover:bg-gray-200 rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                if (item.action) item.action();
              }}
            >
              <Link to={item.path} className="flex items-center w-full">
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;

