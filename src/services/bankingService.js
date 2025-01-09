const BACKEND_URL = import.meta.env.VITE_DATABASE_URL;
const TOKEN_KEY = "token";

const getAuthHeader = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createAccount = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/create-bank-account/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to create account.");
    }

    return await res.json();
  } catch (err) {
    console.error("Error creating account:", err);
    throw err;
  }
};

export const getAccounts = async () => {
  try {
      const res = await fetch(`${BACKEND_URL}/api/user-accounts/`, {
          headers: getAuthHeader(),
      });

      if (!res.ok) throw new Error("Failed to fetch master lists.");

      return await res.json();
  } catch (err) {
      console.error("Error fetching master lists:", err);
      throw err;
  }
};

export const deleteAccount = async (id) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/user-accounts/${id}/`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });

    if (!res.ok) throw new Error("Failed to delete account.");
  } catch (err) {
    console.error("Error deleting account:", err);
    throw err;
  }
};

export const getTransactions = async (accountNumber) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/user-accounts/${accountNumber}/`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
    });

    if (!res.ok) {
      let errorMessage = 'Failed to fetch transactions';
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = res.statusText || 'An unknown error occurred';
      }
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (err) {
    console.error('Transaction fetch error:', err);
    throw new Error('Failed to fetch transactions: ' + err.message);
  }
};

export const SendMoney = async (senderAccountNumber, receiverAccountNumber, amount) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/send-money/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify({
        sender_account: senderAccountNumber,
        receiver_account: receiverAccountNumber,
        amount,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Backend error response:", errorData); 
      throw new Error(errorData.message || "Failed to Send Money.");
    }

    return await res.json();
  } catch (err) {
    console.error("Error during transaction:", err); 
    throw err;
  }
};

export const deposit = async (accountId, amount) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/deposit-money/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify({ account_number: accountId, amount }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to deposit.");
    }

    return await res.json();
  } catch (err) {
    console.error("Error depositing:", err);
    throw err;
  }
};

export const withdraw = async (accountId, amount) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/withdraw-money/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify({ account_number: accountId, amount }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to WithDraw.");
    }

    return await res.json();
  } catch (err) {
    console.error("Error depositing:", err);
    throw err;
  }
};


