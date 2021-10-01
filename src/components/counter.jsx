import React, { Component } from "react";

import {
  Button,
  IconButton,
  Chip,
  Card,
  CardContent,
  CardActions,
  Typography,
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
          <Typography gutterBottom variant="h5" component="div">
            {data.id}
          </Typography>
          <Box>
            <Chip label={data.value} color={labelColor} />
            <IconButton variant="contained" onClick={() => onDecrement(data)}>
              <Remove />
            </IconButton>
            <IconButton variant="contained" onClick={() => onIncrement(data)}>
              <Add />
            </IconButton>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => onDelete(data)}
            style={{ color: "red" }}
          >
            Delete
          </Button>
          <Button size="small" onClick={() => onReset(data)}>
            Reset
          </Button>
        </CardActions>
      </Card>
    );

    return (
      <Card>
        <CardContent>
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
