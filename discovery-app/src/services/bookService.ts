import axios from "axios";
import { getAuthToken } from "./authService";

const API_BASE_URL = "http://localhost:5000/api/books";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Fixing Admin API calls (add, update, delete)
export const addBook = async (bookData: any) => {
  try {
    const token = getAuthToken();
    const response = await axios.post(`${API_BASE_URL}`, bookData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add book";
  }
};

export const updateBook = async (id: string, bookData: any) => {
  try {
    const token = getAuthToken();
    const response = await axios.put(`${API_BASE_URL}/${id}`, bookData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to update book";
  }
};

export const deleteBook = async (id: string) => {
  try {
    const token = getAuthToken();
    const response = await axios.delete(`${API_BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete book";
  }
};
