import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import backgroundImage from "../images/i4.jpg";
const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", formData, {
        withCredentials: true,
      });

      console.log("Login Response:", res.data);

      localStorage.setItem("token", res.data.token);
      console.log("Token saved:", localStorage.getItem("token"));

      navigate("/dashboard");
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 0,
        margin: 0,
        minWidth: "100%",
      }}
    >
      <Card
        sx={{
          p: 4,
          width: "90%",
          maxWidth: 300,
          boxShadow: 5,
          bgcolor: "rgba(255, 255, 255, 0.5)", // Adjusted transparency (0.5 alpha)
          backdropFilter: "blur(10px)", // Optional: Adds a blur effect to the background
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        {message && (
          <Typography
            align="center"
            color={message.includes("successful") ? "success.main" : "error.main"}
            sx={{ mb: 2 }}
          >
            {message}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#4caf50", color: "white", '&:hover': { backgroundColor: "#45a049" } }}
            fullWidth
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;