import React, { Component } from "react";
import { Button, IconButton, Chip } from "@mui/material";
import { Add, Remove, Delete, RotateLeft } from "@mui/icons-material";

class Counter extends Component {
  render() {
    const { data, onIncrement, onDecrement, onReset, onDelete } = this.props;

    return (
      <div>
        <IconButton variant="contained" onClick={() => onDecrement(data)}>
          <Remove />
        </IconButton>
        <Chip label={data.value} />
        <IconButton variant="contained" onClick={() => onIncrement(data)}>
          <Add />
        </IconButton>
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
      </div>
    );
  }
}

export default Counter;
