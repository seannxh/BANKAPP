import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/background1.mp4";
import { getAccounts, createAccount } from "../../services/bankingService";
import ClipLoader from "react-spinners/ClipLoader";

const CreateBankAccount = () => {
  const [accountType, setAccountType] = useState("");
  const [initialBalance, setInitialBalance] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      await createAccount({ account_type: accountType, initial_balance: initialBalance });

      setSuccessMessage("Bank account created successfully!");
      setTimeout(() => {
        navigate("/api/user-accounts");
      }, 3000);
    } catch (err) {
      setError(err.message || "Failed to create account.");
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
          <h2 className="text-3xl font-bold text-center mb-6">Create Bank Account</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {successMessage && (
            <div className="text-green-500 text-center mb-4">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Type
              </label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              >
                <option value="" disabled>
                  Select Account Type
                </option>
                <option value="CHECKING">Checking</option>
                <option value="SAVINGS">Savings</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Balance
              </label>
              <input
                type="number"
                value={initialBalance}
                onChange={(e) => setInitialBalance(e.target.value)}
                min="0"
                step="0.01"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 bg-gradient-to-r from-gray-900 to-gray-900 rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBankAccount;
