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
  Grid,
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
      {/* Set the background color of the entire page to match the theme */}
      <Box sx={{ background: 'linear-gradient(to bottom, #0a1f1d, #0d2a28)', minHeight: '100vh', padding: '20px 0', textAlign: 'center' }}>c
        <Container maxWidth="lg">
          {/* Page Title */}<br></br>
       
          <section className="text-center mb-16">

      <p1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
        Advice from Experts
      </p1> <br></br><br></br>
      <p className="text-xl md:text-xl text-gray-300 max-w-2xl mx-auto">
        From innovative farming techniques to sustainable practices, our experts share actionable advice to help you maximize your yield and overcome challenges.
      </p>
    </section>
        

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Left Side: Advice List */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: '#0a2f2c',
                  border: '2px solid #00ff88',
                  borderRadius: '12px',
                  transition: 'all 0.3s',
                  '&:hover': { borderColor: '#00b8ff', boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
                }}
              >
                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#00ff88' }}>
                  Advice List
                </Typography>
                {loading ? (
                  <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <CircularProgress sx={{ color: '#00ff88' }} />
                  </Box>
                ) : (
                  <List>
                    {adviceList.map((advice) => (
                      <ListItem
                        key={advice._id}
                        sx={{
                          mb: 2,
                          backgroundColor: '#0a2f2c',
                          border: '1px solid #00ff88',
                          borderRadius: '8px',
                          transition: 'all 0.3s',
                          '&:hover': { borderColor: '#00b8ff', boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)' },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography variant="body1" sx={{ color: '#00ff88' }}>
                              {advice.title}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography variant="body2" sx={{ color: '#00ff88' }}>
                                {advice.content}
                              </Typography>
                              <Typography variant="caption" sx={{ color: '#00ff88' }}>
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
            </Grid>

            {/* Right Side: Advice Form */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: '#0a2f2c',
                  border: '2px solid #00ff88',
                  borderRadius: '12px',
                  transition: 'all 0.3s',
                  '&:hover': { borderColor: '#00b8ff', boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
                }}
              >
                <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#00ff88' }}>
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
                    sx={{
                      backgroundColor: '#0a2f2c',
                      borderRadius: '8px',
                      '& .MuiInputBase-root': { color: '#00ff88' },
                      '& .MuiInputLabel-root': { color: '#00ff88' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#00ff88' },
                        '&:hover fieldset': { borderColor: '#00b8ff' },
                      },
                    }}
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
                    sx={{
                      backgroundColor: '#0a2f2c',
                      borderRadius: '8px',
                      '& .MuiInputBase-root': { color: '#00ff88' },
                      '& .MuiInputLabel-root': { color: '#00ff88' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#00ff88' },
                        '&:hover fieldset': { borderColor: '#00b8ff' },
                      },
                    }}
                  />
                  {error && (
                    <Typography color="error" sx={{ mt: 2, color: '#ff4444' }}>
                      {error}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(to right, #00ff88, #00b8ff)',
                      color: '#0a2f2c',
                      '&:hover': { background: 'linear-gradient(to right, #00b8ff, #00ff88)' },
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>

          {/* Success Snackbar */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ backgroundColor: '#00ff88', color: '#0a2f2c' }}
            >
              Advice posted successfully!
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </Layout>
  );
};

export default Advice;