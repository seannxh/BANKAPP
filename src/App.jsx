import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Signup from "./components/Signup/signup.jsx";
import Signin from "./components/Signin/signin.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AccountDashboard from "./components/ViewAccount/viewaccount.jsx"
import { getUser } from "./services/authService.js";
import ContactUs from "./components/contact/contact.jsx";
import CreateBankAccount from "./components/Create/create.jsx"
import Withdraw from "./components/withdraw/withdraw.jsx"
import Send from "./components/transfer/transfer.jsx";
import Deposit from "./components/Deposit/deposit.jsx"
const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);

  const ProtectedRoute = ({ children }) => {
    const user = getUser();
    return user ? children : <Navigate to="/api/signin" replace />;
  };

  return (
    <div className="app">
      <Navbar
        token={token} setToken={setToken}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/signin" element={<Signin setToken={setToken} />} />
        <Route path="/api/signup" element={<Signup token={token} setToken={setToken} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/api/user-accounts/"
          
          element={
            <ProtectedRoute>
              <AccountDashboard token={token} setToken={setToken}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/api/send-money"
          element={
            <ProtectedRoute>
              <Send/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/api/deposit-money"
          element={
            <ProtectedRoute>

                <Deposit/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/api/create-bank-account/"
          element={
            <ProtectedRoute>
              <CreateBankAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/api/withdraw-money"
          element={
            <ProtectedRoute>
                <Withdraw/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
