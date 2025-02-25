import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";

// Register a New User
export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { username, password });
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || "Registration failed";
  }
};

// Login User
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });

    // Store user data in localStorage
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("username", response.data.user.username);
    localStorage.setItem("role", response.data.user.role);

    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || "Login failed";
  }
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
};

// Get Auth Token
export const getAuthToken = () => localStorage.getItem("token");

// Get User Role
export const getUserRole = () => localStorage.getItem("role");
