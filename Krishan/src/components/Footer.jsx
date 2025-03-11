import React, { useState } from "react";
import { Box, Container, Grid, Typography, IconButton, TextField, Button, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../images/KrishanLogo.png"; // Import Krishan logo

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(145deg, #0a1f1d, #0d2a28)", // Gradient background
  backdropFilter: "blur(10px)", // Glass morphism effect
  color: "#ffffff",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  borderTop: "1px solid rgba(0, 255, 136, 0.1)", // Neon border
  fontFamily: "Poppins, sans-serif", // Poppins font
}));

const FooterLink = styled(Typography)({
  cursor: "pointer",
  color: "#ffffff",
  transition: "all 0.3s ease",
  fontFamily: "Poppins, sans-serif", // Poppins font
  "&:hover": {
    color: "#00ff88", // Neon green on hover
    textDecoration: "underline",
    transform: "translateY(-5px)", // Pop-up effect
  },
});

const SocialIcon = styled(IconButton)({
  color: "#ffffff",
  margin: "0 8px",
  transition: "transform 0.2s",
  fontFamily: "Poppins, sans-serif", // Poppins font
  "&:hover": {
    transform: "scale(1.5)", // Pop-up effect
    color: "#00ff88", // Neon green on hover
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
        <Grid container spacing={6}>
          {/* Logo, Company Info, and Send Email Section (Left-Aligned) */}
          <Grid item xs={12} md={6}>
            <Box mb={3} textAlign="left">
              <img
                src={logo} // Use Krishan logo
                alt="Krishan Logo"
                style={{ height: "60px", marginBottom: "16px" }}
              />
              <Typography variant="body2" color="#ffffff" style={{ maxWidth: "300px", fontFamily: "Poppins, sans-serif" }}>
                Empowering farmers with cutting-edge<br />technology and community-driven solutions.
              </Typography>

              {/* Send Email Section */}
              <Box mt={4}>
                <Typography variant="h6" color="#00ff88" gutterBottom style={{ fontFamily: "Poppins, sans-serif" }}>
                  Stay Updated
                </Typography>
                <form onSubmit={handleSubscribe}>
                  <Box display="flex" flexDirection="column" gap={2} sx={{ maxWidth: "300px" }}> {/* Narrower width */}
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#00ff88", // Neon green border
                          },
                          "&:hover fieldset": {
                            borderColor: "#00ff88", // Neon green border on hover
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#ffffff", // White text
                          fontFamily: "Poppins, sans-serif",
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#00ff88", // Neon green background
                        color: "#0a1f1d", // Dark text
                        fontFamily: "Poppins, sans-serif",
                        padding: "4px 12px", // Smaller padding
                        fontSize: "0.875rem", // Smaller font size
                        width: "100%", // Full width within the container
                        "&:hover": {
                          backgroundColor: "#00cc77", // Darker green on hover
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>

          {/* Products, Customer Resources, and Company Sections (Right-Aligned) */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={6}> {/* Increased spacing between sections */}
              {/* Products Section */}
              <Grid item xs={12} sm={4} sx={{ mb: 8 }}> {/* Increased vertical spacing */}
                <Typography variant="h6" gutterBottom={4} color="#00ff88" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Services
                </Typography> <br></br>
                <FooterLink variant="body2" paragraph>Market Insights</FooterLink>
                <FooterLink variant="body2" paragraph>Weather Forecasting</FooterLink>
                <FooterLink variant="body2" paragraph>Crop Planning</FooterLink>
                <FooterLink variant="body2" paragraph>Community Forums</FooterLink>
                <FooterLink variant="body2" paragraph>Pricing Plans</FooterLink>
                <FooterLink variant="body2" paragraph>Mobile App</FooterLink>
              </Grid>

              {/* Customer Resources Section */}
              <Grid item xs={12} sm={4} sx={{ mb: 8 }}> {/* Increased vertical spacing */}
                <Typography variant="h6" gutterBottom={4} color="#00ff88" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Customer Resources
                </Typography><br></br>
                <FooterLink variant="body2" paragraph>Help Center</FooterLink>
                <FooterLink variant="body2" paragraph>Community Support</FooterLink>
                <FooterLink variant="body2" paragraph>Knowledge Base</FooterLink>
                <FooterLink variant="body2" paragraph>API Documentation</FooterLink>
                <FooterLink variant="body2" paragraph>FAQs</FooterLink>
                <FooterLink variant="body2" paragraph>Tutorials</FooterLink>
              </Grid>

              {/* Company Section */}
              <Grid item xs={12} sm={4} sx={{ mb: 8 }}> {/* Increased vertical spacing */}
                <Typography variant="h6" gutterBottom={4} color="#00ff88" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Company
                </Typography><br></br>
                <FooterLink variant="body2" paragraph>About Us</FooterLink>
                <FooterLink variant="body2" paragraph>Careers</FooterLink>
                <FooterLink variant="body2" paragraph>Contact Us</FooterLink>
                <FooterLink variant="body2" paragraph>Press Kit</FooterLink>
                <FooterLink variant="body2" paragraph>Privacy Policy</FooterLink>
                <FooterLink variant="body2" paragraph>Terms of Service</FooterLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box mt={4} pt={4} borderTop={1} borderColor="rgba(255,255,255,0.1)">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="#ffffff" sx={{ mb: { xs: 2, md: 0 }, fontFamily: "Poppins, sans-serif" }}>
                © 2025 Krishan. All rights reserved.
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