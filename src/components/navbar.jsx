import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  IconButton,
  Button,
  Container,
} from "@mui/material";

import React from "react";

function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" component="div">
              React Counter
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
