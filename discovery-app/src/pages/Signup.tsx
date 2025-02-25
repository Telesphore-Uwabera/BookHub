import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { TextField, Button, Box, Typography } from "@mui/material";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(""); 
    const response = await registerUser(username, password);
    if (response.message === "User registered successfully") {
      alert("✅ Registration successful! Redirecting to login...");
      navigate("/login");
    } else {
      setError(response);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Sign Up</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField fullWidth margin="normal" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSignup} fullWidth>
        Sign Up
      </Button>
      <Typography mt={2}>Already have an account? <a href="/login">Login here</a></Typography>
    </Box>
  );
};

export default Signup;
