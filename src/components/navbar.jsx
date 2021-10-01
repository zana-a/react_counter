import React, { Component } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Badge,
  Button,
  Container,
  Stack,
} from "@mui/material";

import { ClearAll, RotateLeft } from "@mui/icons-material";

class Navbar extends Component {
  render = () => {
    const { onResetAll, onDeleteAll, data } = this.props;
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Box flex={1}>
            <Badge badgeContent={data.counters.length} color="secondary">
              <Typography variant="h6" component="div">
                React Counter
              </Typography>
            </Badge>
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "orange", marginRight: "1rem" }}
            onClick={() => onResetAll()}
          >
            <RotateLeft />
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "red" }}
            onClick={() => onDeleteAll()}
          >
            <ClearAll />
          </Button>
        </Toolbar>
      </AppBar>
    );
  };
}
export default Navbar;
