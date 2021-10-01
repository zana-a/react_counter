import React, { Component } from "react";

import {
  Button,
  IconButton,
  Chip,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";

import { Add, Remove, Delete, RotateLeft } from "@mui/icons-material";

class Counter extends Component {
  render = () => {
    const { data, onIncrement, onDecrement, onReset, onDelete } = this.props;
    const labelColor = data.value === 0 ? "default" : "primary";
    return (
      <Card>
        <CardContent>
          <Box>
            <Chip label={data.value} color={labelColor} />
            <IconButton variant="contained" onClick={() => onDecrement(data)}>
              <Remove />
            </IconButton>
            <IconButton variant="contained" onClick={() => onIncrement(data)}>
              <Add />
            </IconButton>
          </Box>
          <Box>
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "orange" }}
              onClick={() => onReset(data)}
            >
              <RotateLeft />
            </Button>
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "red" }}
              onClick={() => onDelete(data)}
            >
              <Delete />
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };
}

export default Counter;
