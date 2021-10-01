import React, { Component } from "react";
import Counter from "./counter";
import { Button } from "@mui/material";
import { ClearAll } from "@mui/icons-material";

class Counters extends Component {
  render = () => {
    const {
      onIncrement,
      onDecrement,
      onReset,
      onDelete,
      onResetAll,
      onDeleteAll,
      onNew,
      data,
    } = this.props;

    return (
      <main className="container">
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
        <Button variant="contained" onClick={() => onResetAll()}>
          Reset All
        </Button>
        <Button variant="contained" onClick={() => onDeleteAll()}>
          <ClearAll />
        </Button>
        <Button variant="contained" onClick={() => onNew()}>
          New
        </Button>
      </main>
    );
  };
}

export default Counters;
