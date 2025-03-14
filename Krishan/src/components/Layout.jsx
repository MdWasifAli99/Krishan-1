import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { Box } from "@mui/material"; // Import Box for consistent styling

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ pt: 8, minHeight: "calc(100vh - 200px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
