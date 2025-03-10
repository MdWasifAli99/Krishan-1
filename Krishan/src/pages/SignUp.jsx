import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Card, MenuItem, Select } from "@mui/material";
import backgroundImage from "../images/i4.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData, {
        withCredentials: true, // Ensures JWT cookie is stored
      });

      setMessage("Signup successful! Please log in.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed. Try again.");
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
          maxWidth: 400,
          boxShadow: 5,
          bgcolor: "rgba(255, 255, 255, 0.5)", // Transparent background
          backdropFilter: "blur(10px)", // Frosted glass effect
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
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
            type="text"
            name="name"
            label="Full Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email Address"
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
            sx={{ mb: 2 }}
          />
          <Select
            fullWidth
            name="role"
            value={formData.role}
            onChange={handleChange}
            displayEmpty
            required
            sx={{ mb: 2 }}
          >
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            <MenuItem value="farmer">Farmer</MenuItem>
            <MenuItem value="businessman">Businessman</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
          </Select>
          <TextField
            fullWidth
            type="text"
            name="location"
            label="Location"
            variant="outlined"
            value={formData.location}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#4caf50", color: "white", '&:hover': { backgroundColor: "#45a049" } }}
            fullWidth
          >
            Register
          </Button>
        </form>
        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#4caf50", textDecoration: "none" }}>
            Log in
          </a>
        </Typography>
      </Card>
    </Container>
  );
};

export default Signup;