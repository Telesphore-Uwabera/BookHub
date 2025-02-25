import { Navigate } from "react-router-dom";
import { getAuthToken, getUserRole } from "../services/authService";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  return getAuthToken() && getUserRole() === "admin" ? children : <Navigate to="/login" />;
};

export default AdminRoute;
