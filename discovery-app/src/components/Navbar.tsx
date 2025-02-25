import { Link, useNavigate } from "react-router-dom";
import { getAuthToken, logoutUser, getUserRole, getCurrentUser } from "../services/authService";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getAuthToken();
  const role = getUserRole();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleAdminClick = () => {
    if (!token) {
      navigate("/login"); 
    } else {
      navigate("/admin");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Book Hub
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {!token ? (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </>
          ) : (
            <>
              <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                Welcome, {user.username}
              </Typography>
              {role === "admin" && (
                <Button color="inherit" onClick={handleAdminClick}>
                  Admin
                </Button>
              )}
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
