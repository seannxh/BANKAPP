import React, { useState, useEffect } from "react";
import { getAccounts, withdraw } from "../../services/bankingService";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import video from "../../assets/background1.mp4";

const Withdraw = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accountsData = await getAccounts();
        setAccounts(accountsData);
      } catch (err) {
        console.error("Failed to fetch accounts:", err);
        setError("Failed to load accounts.");
      }
    };
    fetchAccounts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAccount || !amount) {
      setError("Please select an account and enter an amount.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await withdraw(selectedAccount, parseFloat(amount));
      setSuccess(true);
      setAmount("");
      setSelectedAccount("");
      navigate("/api/user-accounts/");
    } catch (err) {
      console.error("Withdraw failed:", err);
      setError("Failed to complete the withdrawal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {loading && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Withdraw</h2>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {success && (
            <div className="text-green-500 text-center mb-4">
              Withdrawal successful!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="account" className="block text-sm font-medium text-gray-700 mb-2">
                Select Account
              </label>
              <select
                id="account"
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              >
                <option value="">Choose an account</option>
                {accounts.map((account) => (
                  <option key={account.account_number} value={account.account_number}>
                    {account.account_type} - {account.account_number}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 bg-gradient-to-r from-gray-900 to-gray-900 rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
                disabled={loading}
              >
                {loading ? "Processing..." : "Withdraw"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
