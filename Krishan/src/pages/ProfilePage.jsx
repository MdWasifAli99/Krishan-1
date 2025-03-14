import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
}));

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Response:', response); // Debugging

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!user) {
    return <Typography>No user data found</Typography>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledAvatar alt={user.name} src="/static/images/avatar/1.jpg" />
        <Typography component="h1" variant="h5">
          {user.name}
        </Typography>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12}>
            <Typography><strong>Email:</strong> {user.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Role:</strong> {user.role}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Location:</strong> {user.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default ProfilePage;