import React, { Component } from "react";
import Counter from "./counter";
import { Stack } from "@mui/material";

class Counters extends Component {
  render = () => {
    const { onIncrement, onDecrement, onReset, onDelete, data } = this.props;

    return (
      <Stack spacing={2}>
        {data.counters.map((counter) => (
          <Counter
            key={counter.id}
            data={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            onDelete={onDelete}
          />
        ))}
      </Stack>
    );
  };
}

export default Counters;
