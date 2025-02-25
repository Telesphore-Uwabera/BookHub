import { Navigate } from "react-router-dom";
import { getAuthToken } from "../services/authService";

// Fix JSX type issue
interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  return getAuthToken() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
