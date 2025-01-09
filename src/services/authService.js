import { jwtDecode } from "jwt-decode";

const BACKEND_URL = import.meta.env.VITE_DATABASE_URL;

export const signup = async (formData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const json = await res.json();
  
      if (json.error) {
        throw new Error(json.error);
      }
  
      return json;
    } catch (err) {
      console.error("Signup error:", err);
      throw new Error(err.message);
    }
  };

export const getUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        
        const user = jwtDecode(token);
        return user;
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
};
export const isAdmin = () => {
    const user = getUser();
    return user?.admin === true; 
};

export const signin = async (formData) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/signin/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        const errorText = await res.json();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }
  
      const json = await res.json();
      console.log("token:", json.access);
      localStorage.setItem("token", json.access);
      localStorage.setItem("refresh_token", json.refresh);
      return json;
    } catch (err) {
      throw new Error(err.message || "Signin failed.");
    }
  };
  
export const signout = () => {
    localStorage.removeItem('token');
}
