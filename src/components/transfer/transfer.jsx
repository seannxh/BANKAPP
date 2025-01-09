import React, { useState, useEffect } from "react";
import { getAccounts, SendMoney } from "../../services/bankingService";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import video1 from "../../assets/background1.mp4";

const Send = () => {
  const [accounts, setAccounts] = useState([]);
  const [senderAccount, setSenderAccount] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
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
    if (!senderAccount || !receiverAccount || !amount) {
      setError("Please fill in all fields.");
      return;
    }
    if (senderAccount === receiverAccount) {
      setError("Sender and receiver accounts must be different.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await SendMoney(senderAccount, receiverAccount, parseFloat(amount));
      setSuccess(true);
      setAmount("");
      setSenderAccount("");
      setReceiverAccount("");
      navigate("/api/user-accounts/");
    } catch (err) {
      console.error("Transfer failed:", err);
      setError("Failed to complete the transfer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none" playsInline draggable="false"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {loading && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Transfer</h2>
        <p className="text-sm text-gray-500 text-center my-5">
          You are able to transfer money to friends & family using Account Number.<br />
          You are able to transfer money to your own other bank account using Account Number.
        </p>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {success && (
            <div className="text-green-500 text-center mb-4">
              Transfer successful!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="senderAccount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Sender Account
              </label>
              <select
                id="senderAccount"
                value={senderAccount}
                onChange={(e) => setSenderAccount(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              >
                <option value="">Choose a sender account</option>
                {accounts.map((account) => (
                  <option key={account.account_number} value={account.account_number}>
                    {account.account_type} - {account.account_number}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="receiverAccount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Receiver Account
              </label>
              <input
                type="text"
                id="receiverAccount"
                value={receiverAccount}
                onChange={(e) => setReceiverAccount(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
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

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4  bg-gradient-to-r from-gray-900 to-gray-900 rounded-md cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              disabled={loading}
            >
              {loading ? "Processing..." : "Send Money"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Send;
