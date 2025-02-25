import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { TextField, Button, Box, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); 
    const response = await loginUser(username, password);

    if (response.token) {
      alert("✅ Login successful!");
      navigate(response.user.role === "admin" ? "/admin" : `/home/${username}`);
    } else {
      setError(response);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField fullWidth margin="normal" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Login
      </Button>
      <Typography mt={2}>Don't have an account? <a href="/signup">Sign up here</a></Typography>
    </Box>
  );
};

export default Login;
