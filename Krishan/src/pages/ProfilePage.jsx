import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#0a2f2c',
  border: '2px solid #00ff88',
  borderRadius: '12px',
  transition: 'all 0.3s',
  '&:hover': {
    borderColor: '#00b8ff',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
  border: '2px solid #00ff88',
}));

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          role: data.role,
          location: data.location,
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
        setSnackbarOpen(true); // Show success message
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      // Validate new password and confirm new password
      if (formData.newPassword !== formData.confirmNewPassword) {
        throw new Error('New passwords do not match');
      }

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          location: formData.location,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setEditMode(false);
      setSnackbarOpen(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress sx={{ color: '#00ff88' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" align="center" sx={{ color: '#ff4444', mt: 4 }}>
        {error}
      </Typography>
    );
  }

  if (!user) {
    return (
      <Typography variant="h6" align="center" sx={{ color: '#00ff88', mt: 4 }}>
        No user data found
      </Typography>
    );
  }

  return (
    <Layout>
      <Box sx={{ backgroundColor: 'rgba(14, 31, 29, 0.9)', minHeight: '100vh', padding: '20px 0' }}>
        <Container component="main" maxWidth="sm">
          <StyledPaper elevation={3}>
            <StyledAvatar alt={user.name} src="/static/images/avatar/1.jpg" />
            {editMode ? (
              <>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  label="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Current Password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm New Password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  sx={{ mb: 2, input: { color: '#00ff88' }, label: { color: '#00ff88' } }}
                />
                <Button
                  variant="contained"
                  onClick={handleSaveClick}
                  sx={{ backgroundColor: '#00ff88', color: '#0a2f2c', mt: 2 }}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Typography component="h1" variant="h5" sx={{ color: '#00ff88' }}>
                  {user.name}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <Typography sx={{ color: '#00ff88' }}>
                      <strong>Email:</strong> {user.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ color: '#00ff88' }}>
                      <strong>Role:</strong> {user.role}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ color: '#00ff88' }}>
                      <strong>Location:</strong> {user.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{ color: '#00ff88' }}>
                      <strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  onClick={handleEditClick}
                  sx={{ backgroundColor: '#00ff88', color: '#0a2f2c', mt: 2 }}
                >
                  Edit
                </Button>
              </>
            )}
          </StyledPaper>

          {/* Success Snackbar */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ backgroundColor: '#00ff88', color: '#0a2f2c' }}>
              {editMode ? 'Profile updated successfully!' : 'Profile loaded successfully!'}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProfilePage;