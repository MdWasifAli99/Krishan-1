// src/pages/Advice.jsx
import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';  // Assuming Layout is in the components folder
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const Advice = () => {
  // State for advice list, form inputs, and error handling
  const [adviceList, setAdviceList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Base URL for the backend API
  const BASE_URL = "http://localhost:5000/api/advice";

  // Fetch advice on component mount
  useEffect(() => {
    fetchAdvice();
  }, []);

  // Fetch all advice from the backend
  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      setAdviceList(response.data);
    } catch (err) {
      setError("Failed to fetch advice");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission to post new advice
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    try {
      const response = await axios.post(
        BASE_URL,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include auth token
          },
        }
      );
      setAdviceList([...adviceList, response.data]); // Add new advice to the list
      setTitle(""); // Clear form fields
      setContent("");
      setError("");
      setSnackbarOpen(true); // Show success message
    } catch (err) {
      setError("Failed to post advice");
      console.error(err);
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Layout>
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
          Advice Board
        </Typography>

        {/* Form to Post New Advice */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Post New Advice
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              required
            />
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Paper>

        {/* Display Advice List */}
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Advice List
          </Typography>
          {loading ? (
            <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <List>
              {adviceList.map((advice) => (
                <ListItem key={advice._id} sx={{ mb: 2 }}>
                  <ListItemText
                    primary={advice.title}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {advice.content}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          By: {advice.author?.name || "Unknown"}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>

        {/* Success Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Advice posted successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default Advice;
