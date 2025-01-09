import React, { useState, useEffect } from 'react';
import { getAccounts, getTransactions } from '../../services/bankingService';
import ClipLoader from "react-spinners/ClipLoader";
import video1 from "../../assets/background1.mp4";

const AccountDashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleAccountNumbers, setVisibleAccountNumbers] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [updatedBalance, setUpdatedBalance] = useState(0);

  const fetchAccountsData = async () => {
    try {
      const accountsData = await getAccounts();
      setAccounts(accountsData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch account data. Please try again later.');
      console.error('Account fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccountsData();
    const pollInterval = setInterval(fetchAccountsData, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  const fetchTransactions = async (accountNumber) => {
    try {
      console.log('Fetching transactions for account:', accountNumber);
      const transactionData = await getTransactions(accountNumber);
      console.log('Fetched transaction data:', transactionData);
  
      const selectedAcc = accounts.find((acc) => acc.account_number === accountNumber);
      console.log('Selected account:', selectedAcc);
  
      setTransactions(transactionData);
      setUpdatedBalance(selectedAcc?.balance || 0);
      setSelectedAccount(accountNumber);
      setModalOpen(true);
    } catch (err) {
      console.error('Failed to fetch transactions for account:', accountNumber, err);
    }
  };

  const toggleAccountNumber = (accountNumber) => {
    setVisibleAccountNumbers((prevState) => ({
      ...prevState,
      [accountNumber]: !prevState[accountNumber],
    }));
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAccount(null);
    setTransactions([]);
  };

  if (loading) {
    return (
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-4 p-4 bg-red-100 text-red-700 rounded-md">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-4xl px-6 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Your Accounts</h1>
          <div className="flex flex-col space-y-6">
            {accounts.map((account) => (
              <div
                key={account.account_number}
                className="flex flex-col md:flex-row items-center md:items-start border-2 border-gray-200 rounded-lg p-4 shadow-md"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800">{account.account_type}</h2>
                  <p className="text-gray-600">
                    Balance: ${parseFloat(account.balance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  {visibleAccountNumbers[account.account_number] ? (
                    <>
                      <span className="text-gray-800">
                        Account Number: {account.account_number}
                      </span>
                      <button
                        onClick={() => toggleAccountNumber(account.account_number)}
                        className="text-red-500 hover:underline ml-2"
                      >
                        Hide
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => toggleAccountNumber(account.account_number)}
                      className="text-red-500 hover:underline mt-1"
                    >
                      View Account Number
                    </button>
                  )}
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button
                    className="text-gray-500 hover:underline focus:outline-none"
                    onClick={() => fetchTransactions(account.account_number)}
                  >
                    View Transactions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Transactions for {selectedAccount}
            </h2>
            <ul className="space-y-2">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <li key={transaction.id} className="text-sm text-gray-600 font-semibold">
                  <span className="text-green-600">
                    {transaction.transaction_type === "DEPOSIT" && "Deposit"}

                  </span>
                  <span className="text-red-600">
                    {transaction.transaction_type === "WITHDRAWAL" && "Withdrawal"}
                  </span>
                  <span className="text-blue-600">
                  {transaction.transaction_type === "TRANSFER" && "Transfer"}
                  </span>
                  &nbsp;&rarr;&nbsp;
                  {transaction.transaction_type === "DEPOSIT" && transaction.receiver_account
                    ? `Receiver: ${transaction.receiver_account}`
                    : transaction.transaction_type === "WITHDRAWAL" && transaction.sender_account
                    ? `Sender: ${transaction.sender_account}`
                    : transaction.transaction_type === "TRANSFER"
                    ? `Receiver: ${transaction.receiver_account}`
                    : "N/A"}: ${parseFloat(transaction.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No transactions available.</p>
            )}
            </ul>
            <div className="mt-4 text-gray-700 font-semibold">
              <strong>Updated Balance:</strong> ${parseFloat(updatedBalance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 text-white bg-gradient-to-r from-gray-900 to-black px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDashboard;
