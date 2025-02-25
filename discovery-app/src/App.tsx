import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import SearchBar from "./components/SearchBar"; 
import { Box, Drawer, IconButton, useMediaQuery, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import UserHomepage from "./pages/UserHomepage";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header with logo */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        {/* BookHub Logo */}
        <Typography variant="h4" sx={{ display: isMobile ? "none" : "block" }}>
          BookHub 📚
        </Typography>

        {/* Hamburger Menu for mobile */}
        {isMobile && (
          <IconButton onClick={toggleMenu} sx={{ color: "#3f51b5" }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Link to="/" style={buttonStyles}>Home</Link>
            <Link to="/login" style={buttonStyles}>Login</Link>
            <Link to="/signup" style={buttonStyles}>Sign Up</Link>
            <Link to="/admin" style={buttonStyles}>Admin</Link>
          </Box>
        )}
      </Box>
      <SearchBar />

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Link to="/" style={drawerButtonStyles} onClick={toggleMenu}>Home</Link>
          <Link to="/login" style={drawerButtonStyles} onClick={toggleMenu}>Login</Link>
          <Link to="/signup" style={drawerButtonStyles} onClick={toggleMenu}>Sign Up</Link>
          <Link to="/admin" style={drawerButtonStyles} onClick={toggleMenu}>Admin</Link>
        </Box>
      </Drawer>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:username" element={<UserHomepage />} /> 
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Routes>
    </>
  );
};

const buttonStyles = {
  display: "inline-block",
  padding: "10px 20px",
  margin: "0 10px",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#3f51b5",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s, transform 0.2s",
  "&:hover": {
    backgroundColor: "#303f9f",
    transform: "scale(1.05)",
  }
};

const drawerButtonStyles = {
  display: "inline-block",
  padding: "10px 20px",
  margin: "10px 0",
  textDecoration: "none",
  color: "white",
  backgroundColor: "#3f51b5",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s, transform 0.2s",
  "&:hover": {
    backgroundColor: "#303f9f",
    transform: "scale(1.05)",
  }
};

export default App;
