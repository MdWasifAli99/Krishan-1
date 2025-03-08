import React, { useState } from "react";
import { AppBar, Box, Container, Grid, Typography, TextField, Button, IconButton, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a237e",
  color: "#ffffff",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
}));

const NewsletterSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#283593",
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
}));

const FooterLink = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const SocialIcon = styled(IconButton)({
  color: "#ffffff",
  margin: "0 8px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.2)",
    color: "#90caf9",
  },
});

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setEmail("");
    }
  };

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={3} textAlign="center">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Company Logo"
                style={{ height: 60, marginBottom: 16 }}
              />
              <Typography variant="body2">
                We are dedicated to providing innovative solutions that transform businesses and enhance user experiences.
              </Typography>
            </Box>
          </Grid>

          {/* Products Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <FooterLink variant="body2" paragraph>Solutions</FooterLink>
            <FooterLink variant="body2" paragraph>Services</FooterLink>
            <FooterLink variant="body2" paragraph>Pricing</FooterLink>
            <FooterLink variant="body2" paragraph>Documentation</FooterLink>
          </Grid>

          {/* Customer Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Resources
            </Typography>
            <FooterLink variant="body2" paragraph>Help Center</FooterLink>
            <FooterLink variant="body2" paragraph>Community</FooterLink>
            <FooterLink variant="body2" paragraph>Knowledge Base</FooterLink>
            <FooterLink variant="body2" paragraph>API Documentation</FooterLink>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <FooterLink variant="body2" paragraph>About Us</FooterLink>
            <FooterLink variant="body2" paragraph>Careers</FooterLink>
            <FooterLink variant="body2" paragraph>Contact</FooterLink>
            <FooterLink variant="body2" paragraph>Press Kit</FooterLink>
          </Grid>
        </Grid>

        <Box mt={4} pt={4} borderTop={1} borderColor="rgba(255,255,255,0.1)">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
                © 2024 Company Name. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
                <SocialIcon aria-label="Facebook">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon aria-label="Twitter">
                  <TwitterIcon />
                </SocialIcon>
                <SocialIcon aria-label="Instagram">
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialIcon>
                <SocialIcon aria-label="GitHub">
                  <GitHubIcon />
                </SocialIcon>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;