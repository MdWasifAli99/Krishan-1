import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Box } from "@mui/material"; // Import Box for consistent styling

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
     
      <Box sx={{ pt: 8 }}> 
        {children}
      </Box>
    </>
  );
};

export default Layout;