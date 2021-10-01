import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";
import { CssBaseline, Container, Fab, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="md">
          <Counters />
        </Container>
        <Box style={{ position: "fixed", right: 0, bottom: 0 }} padding="1rem">
          <Fab color="primary">
            <Add />
          </Fab>
        </Box>
      </div>
    );
  }
}

export default App;
