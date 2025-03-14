import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const AddProduct = () => {
  // State for form inputs, loading, and error handling
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !description || !price || !category || !stock || !image) {
      setError("All fields are required");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include auth token
        },
      });
      setSnackbarOpen(true); // Show success message
      setError("");
      // Clear form fields
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setStock("");
      setImage(null);
    } catch (err) {
      setError("Failed to add product");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('https://img.freepik.com/free-photo/fresh-vegetables-fruit-market-stall_1101-2560.jpg?ga=GA1.1.464168463.1704480389&semt=ais_hybrid')", // Use the provided image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm"> {/* Reduced maxWidth to make the form smaller */}
        {/* Page Title */}
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4, color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Add Product
        </Typography>

        {/* Form to Add Product */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: "rgba(255, 255, 255, 0.8)", width: "100%" }}> {/* Adjusted width */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              margin="normal"
              required
            />
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "16px",
                margin: "16px 0",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "block", width: "100%" }}
                required
              />
            </Box>
            
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
<Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#4CAF50", "&:hover": { backgroundColor: "#45a049" } }} // Green button
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Add Product"}
            </Button>
          </form>
        </Paper>

        {/* Success Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Product added successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AddProduct;