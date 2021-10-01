import React, { Component } from "react";
import Counter from "./counter";
import { Button } from "@mui/material";
import { ClearAll } from "@mui/icons-material";

class Counters extends Component {
  constructor() {
    super();
    this.state = {
      counters: [{ id: 1, value: 0 }],
    };
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (!(counters[index].value === 0)) counters[index].value -= 1;
    this.setState({
      counters,
    });
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState({
      counters,
    });
  };

  handleResetAll = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({
      counters,
    });
  };

  handleDeleteAll = () => {
    let counters = [...this.state.counters];
    counters = [];
    this.setState({
      counters,
    });
  };

  handleDelete = (other) => {
    let counters = [...this.state.counters];
    counters = counters.filter((counter) => counter.id !== other.id);
    this.setState({
      counters,
    });
  };

  handleNew = () => {
    let counters = [...this.state.counters];
    counters.push({ id: counters.length + 1, value: 0 });
    this.setState({
      counters,
    });
  };

  render = () => {
    const { counters } = this.state;
    return (
      <main className="container">
        {counters.map((data) => (
          <Counter
            key={data.id}
            data={data}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        ))}
        <Button variant="contained" onClick={this.handleResetAll}>
          Reset All
        </Button>
        <Button variant="contained" onClick={this.handleDeleteAll}>
          <ClearAll />
        </Button>
        <Button variant="contained" onClick={this.handleNew}>
          New
        </Button>
      </main>
    );
  };
}

export default Counters;
